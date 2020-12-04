import { FreeAds } from "../interface/freeAds";
import { PriceRule } from "../interface/priceRule";
import { ProductItem } from "../interface/productItem";

interface ProductMap {
  [key: string]: number;
}

interface RetailPriceRuleMap {
  [key: string]: number;
}

interface DiscountRuleMap {
  [key: string]: number;
}

class FreeAdsRule {

  public totalAdsPerPackage: number;
  public chargedAdsPerPackage: number;
  public retailPrice: number;
  public discountPrice?: number;

  constructor(freeAds: FreeAds, retailPrice: number, discountPrice?: number) {
    this.totalAdsPerPackage = freeAds?.totalAdsPerPackage || 0;
    this.chargedAdsPerPackage = freeAds?.chargedAdsPerPackage || 0;
    this.retailPrice = retailPrice;
    if(discountPrice) {
      this.discountPrice = discountPrice;
    }
  }
}

interface FreeAdsRuleMap {
  [key: string]: FreeAdsRule;
}

interface DiscountSavingMap {
  [key: string]: number;
}

export const totalPriceCalculator = (itemArr: Array<ProductItem>, priceRuleArr: Array<PriceRule>): number => {
  let totalPrice = 0;

  const retailPriceMap = getRetailPriceMap(priceRuleArr);

  const productMap = getProductMap(itemArr);

  const discountSavingMap = getDiscountSavingMap(priceRuleArr);

  const freeAdsRulMap = getFreeAdsRuleMap(priceRuleArr);

  totalPrice = getNormalPrice(productMap, retailPriceMap) - getDiscountSaving(productMap, discountSavingMap) - getFreeAdsSaving(productMap, freeAdsRulMap);

  return totalPrice;
}

export const getProductMap = (itemArr: Array<ProductItem>): ProductMap => {
  let productMap: ProductMap = {};
  itemArr.forEach((item: ProductItem) => { productMap[item.type] = (productMap[item.type] || 0) + 1; });
  return productMap;
}

export const getRetailPriceMap = (priceRuleArr: Array<PriceRule>) => {
  return priceRuleArr.reduce((map: RetailPriceRuleMap, priceRule: PriceRule) => {
    map[priceRule.name] = priceRule.retailPrice;
    return map;
  }, {});
}

export const getNormalPrice = (productMap: ProductMap, retailPriceMap: RetailPriceRuleMap): number => {
  let resultPrice = 0;
  for (const productItem in productMap) {
    resultPrice = resultPrice + productMap[productItem] * retailPriceMap[productItem];
  }
  return resultPrice;
}

export const getDiscountSavingMap = (priceRuleArr: Array<PriceRule>) => {
  
  return priceRuleArr.filter((priceRule: PriceRule) => { return priceRule?.retailPrice && priceRule?.discountPrice; })
  .reduce((map: DiscountRuleMap, priceRule: PriceRule) => {
    map[priceRule.name] = priceRule?.retailPrice - (priceRule?.discountPrice as number);
    return map;
  }, {});
}

export const getDiscountSaving = (productMap: ProductMap, discountSavingMap: DiscountSavingMap) => {
  let totalSaving = 0;
  for (const product in productMap) {
    if(discountSavingMap[product]) {
      totalSaving = totalSaving + discountSavingMap[product] * productMap[product];
    }
  }
  return totalSaving;
}

export const getFreeAdsRuleMap = (priceRuleArr: Array<PriceRule>) => {
  return priceRuleArr.filter((priceRule: PriceRule) => { return priceRule?.freeAds?.totalAdsPerPackage && priceRule?.freeAds?.chargedAdsPerPackage; })
  .reduce((map: FreeAdsRuleMap, priceRule: PriceRule) => {
    map[priceRule.name] = priceRule.discountPrice ? 
      new FreeAdsRule(priceRule.freeAds as FreeAds, priceRule.retailPrice, priceRule.discountPrice):
      new FreeAdsRule(priceRule.freeAds as FreeAds, priceRule.retailPrice)
    return map;
  }, {});
}

export const getFreeAdsSaving = (productMap: ProductMap, freeAdsRuleMap: FreeAdsRuleMap) => {
  let totalSaving = 0;
  for (const freeAdsRule in freeAdsRuleMap) {
    // If user have this product, check if able to have free ads
    if(productMap[freeAdsRule]) {
      const freeAdsNumber = Math.floor(productMap[freeAdsRule] / freeAdsRuleMap[freeAdsRule].totalAdsPerPackage) * (freeAdsRuleMap[freeAdsRule].totalAdsPerPackage - freeAdsRuleMap[freeAdsRule].chargedAdsPerPackage);
      if (freeAdsNumber > 0 && freeAdsRuleMap[freeAdsRule]?.discountPrice) {
        totalSaving = totalSaving + freeAdsNumber * (freeAdsRuleMap[freeAdsRule].discountPrice as number);
      } else if ( freeAdsNumber > 0 ) {
        totalSaving = totalSaving + freeAdsNumber * (freeAdsRuleMap[freeAdsRule].retailPrice as number);
      }
    }
  }
  return totalSaving;
}