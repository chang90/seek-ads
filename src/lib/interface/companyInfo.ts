import { CompanyName } from "../enum/companyName";
import { PriceRule } from "./priceRule";

export interface CompanyInfo {
  companyName: CompanyName;
  priceRules: Array<PriceRule>;
}