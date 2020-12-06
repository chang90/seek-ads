import { CompanyName } from "./lib/enum/companyName";
import { ProductType } from "./lib/enum/productType";
import { CompanyInfo } from "./lib/interface/companyInfo";

export const pricingRules: { [key in CompanyName]?: CompanyInfo } = {
  [CompanyName.Default]: {
    companyName: CompanyName.Default,
    priceRules: [{
      name: ProductType.ClassicAd,
      description: 'Offers the most basic level of advertisement',
      retailPrice: 269.99
    },
    {
      name: ProductType.StandoutAd,
      description: 'Allows advertisers to use a company logo and use a longer presentation text',
      retailPrice: 322.99
    },
    {
      name: ProductType.PremiumAd,
      description: 'Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility',
      retailPrice: 394.99
    }]
  },
  [CompanyName.SecondBite]: {
    companyName: CompanyName.SecondBite,
    priceRules: [{
      name: ProductType.ClassicAd,
      description: 'Offers the most basic level of advertisement',
      retailPrice: 269.99,
      freeAds: {
        totalAdsPerPackage: 3,
        chargedAdsPerPackage: 2
      }
    },
    {
      name: ProductType.StandoutAd,
      description: 'Allows advertisers to use a company logo and use a longer presentation text',
      retailPrice: 322.99
    },
    {
      name: ProductType.PremiumAd,
      description: 'Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility',
      retailPrice: 394.99
    }]
  },
  [CompanyName.AxilCoffeeRoasters]: {
    companyName: CompanyName.AxilCoffeeRoasters,
    priceRules: [{
      name: ProductType.ClassicAd,
      description: 'Offers the most basic level of advertisement',
      retailPrice: 269.99
    },
    {
      name: ProductType.StandoutAd,
      description: 'Allows advertisers to use a company logo and use a longer presentation text',
      retailPrice: 322.99,
      discountPrice: 299.99
    },
    {
      name: ProductType.PremiumAd,
      description: 'Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility',
      retailPrice: 394.99
    }]
  },
  [CompanyName.Myer]: {
    companyName: CompanyName.Myer,
    priceRules: [{
      name: ProductType.ClassicAd,
      description: 'Offers the most basic level of advertisement',
      retailPrice: 269.99
    },
    {
      name: ProductType.StandoutAd,
      description: 'Allows advertisers to use a company logo and use a longer presentation text',
      retailPrice: 322.99,
      freeAds: {
        totalAdsPerPackage: 5,
        chargedAdsPerPackage: 4
      }
    },
    {
      name: ProductType.PremiumAd,
      description: 'Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility',
      retailPrice: 394.99,
      discountPrice: 389.99
    }]
  }
}