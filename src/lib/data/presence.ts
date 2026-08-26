export type IndiaRegionBox = {
  title: string;
  cities: string[];
};

/**
 * Faithful reproduction of the four grouped location boxes from the
 * company profile's "Presence Across India" map (page 27). Kept as
 * literal source content — see the interactive state map for a
 * geography-normalised view of the same footprint.
 */
export const indiaRegionBoxes: IndiaRegionBox[] = [
  {
    title: "North India & J&K",
    cities: [
      "Jammu",
      "Rajouri",
      "Akhnoor",
      "Udhampur",
      "Reasi",
      "Poonch",
      "Nowshera",
      "Keri",
      "Srinagar",
      "Anantnag",
      "Baramulla",
      "Leh-Ladakh",
      "Karu",
      "Doda",
      "Kishtwar",
    ],
  },
  {
    title: "Punjab",
    cities: ["Amritsar", "Jalandhar", "Ludhiana", "Firozpur", "Kapurthala"],
  },
  {
    title: "Rajasthan",
    cities: ["Jaipur", "Bikaner", "Jaisalmer"],
  },
  {
    title: "Haryana & NCR Coverage",
    cities: [
      "Manesar (Office)",
      "Gurgaon",
      "Faridabad",
      "Palwal",
      "Nuh",
      "Rewari",
      "Mahendergarh",
      "Mathura",
      "Haridwar",
      "Noida",
      "Meerut",
      "Rohtak",
      "Bilaspur",
      "Guna",
      "Panchkula",
      "Chandigarh",
    ],
  },
];

/**
 * Best-effort mapping of the above cities to their true state, for
 * highlighting on the @svg-maps/india state map. Approximate — several
 * cities in the "Haryana & NCR Coverage" box belong to neighbouring
 * states (service-area coverage, not state membership). Confirm exact
 * service boundaries with Icon Power before treating this as authoritative.
 */
export const indiaStateHighlights: Record<string, string[]> = {
  hr: ["Manesar (HQ)", "Gurgaon", "Faridabad", "Palwal", "Nuh", "Rewari", "Mahendergarh", "Rohtak", "Panchkula"],
  jk: [
    "Jammu",
    "Rajouri",
    "Akhnoor",
    "Udhampur",
    "Reasi",
    "Poonch",
    "Nowshera",
    "Srinagar",
    "Anantnag",
    "Baramulla",
    "Leh-Ladakh",
    "Doda",
    "Kishtwar",
  ],
  pb: ["Amritsar", "Jalandhar", "Ludhiana", "Firozpur", "Kapurthala"],
  rj: ["Jaipur", "Bikaner", "Jaisalmer"],
  up: ["Mathura", "Noida", "Meerut"],
  uk: ["Haridwar"],
  mp: ["Guna"],
  ct: ["Bilaspur"],
  ch: ["Chandigarh"],
  dl: ["Delhi NCR"],
  jh: ["Ranchi"],
  br: ["Rajgir"],
  as: ["Assam region"],
  ml: ["Meghalaya region"],
  nl: ["Nagaland region"],
  mn: ["Manipur region"],
  mz: ["Mizoram (Aizawl)"],
  ar: ["Arunachal Pradesh region"],
};

export const headquartersStateId = "hr";

export type GlobalPresenceCountry = {
  id: string;
  name: string;
};

export const globalPresenceCountries: GlobalPresenceCountry[] = [
  { id: "bt", name: "Bhutan" },
  { id: "mm", name: "Myanmar" },
  { id: "ph", name: "Philippines" },
  { id: "il", name: "Israel" },
  { id: "af", name: "Afghanistan" },
  { id: "za", name: "South Africa" },
];
