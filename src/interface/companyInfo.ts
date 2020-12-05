import { CompanyName } from "../enum/companyName";
import { PriceRule } from "./priceRule";

export interface CompanyInfo {
  companyName: CompanyName;
  priceRule: Array<PriceRule>;
}