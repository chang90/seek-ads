export interface DiscountSavingRuleMap {
  [key: string]: {
    savingPerAds: number;
    bulkDiscountItemNumber?: number;
  };
}