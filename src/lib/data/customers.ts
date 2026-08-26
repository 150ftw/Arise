export type Customer = {
  name: string;
};

/**
 * TODO(client): the source company profile displays customer logos.
 * Publishing third-party trademarks (Indian Army/Air Force, DRDO, L&T,
 * defence primes, etc.) needs explicit permission from each org and from
 * Icon Power. Rendered as a wordmark list for v1 — swap in approved logo
 * assets once permissions are confirmed.
 */
export const domesticCustomers: Customer[] = [
  { name: "Indian Army" },
  { name: "Indian Air Force" },
  { name: "DRDO" },
  { name: "Bharat Electronics (BEL)" },
  { name: "BSNL" },
  { name: "Airports Authority of India" },
  { name: "BECIL" },
  { name: "TCIL" },
  { name: "Bhushan Power & Steel" },
  { name: "Alstom" },
  { name: "Alpha Design Technologies" },
  { name: "SEC Industries" },
  { name: "Ascentech Engineering Solutions" },
  { name: "L&T" },
  { name: "Ramim Engineering Works" },
  { name: "Orbit" },
  { name: "Shafir Production Systems" },
  { name: "CPC" },
];

export const globalCustomers: Customer[] = [
  { name: "IAI Malat Division" },
  { name: "IAI ELTA" },
  { name: "Elbit Systems" },
  { name: "Tashi Cell" },
  { name: "CBBS" },
  { name: "Ardonan" },
  { name: "Elipse Engineering" },
  { name: "M.A.S Electronics" },
  { name: "RAMI SWISS" },
];
