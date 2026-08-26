/**
 * TODO(client): figures below are read off the bar-chart image in the
 * company profile (page 26), not sourced from audited statements — they
 * are approximate. Confirm exact revenue / net profit / tangible
 * networth figures for FY22-23 through FY25-26 before publishing.
 */
export const financialHealth = [
  { year: "2022-23", revenue: 49, netProfit: 2.2, tangibleNetworth: 24.5 },
  { year: "2023-24", revenue: 60, netProfit: 2.6, tangibleNetworth: 27.8 },
  { year: "2024-25", revenue: 66, netProfit: 2.8, tangibleNetworth: 31.2 },
  { year: "2025-26", revenue: 76, netProfit: 3.4, tangibleNetworth: 34.5 },
] as const;

export const financialHighlights = [
  {
    title: "Working Capital Finance",
    detail: "INR 480 Million working capital finance limit from Kotak Mahindra Bank.",
  },
  {
    title: "Clean Repayment History",
    detail: "Not a single financial default in the company's history.",
  },
] as const;
