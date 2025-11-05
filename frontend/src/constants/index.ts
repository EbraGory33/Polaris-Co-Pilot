export const sidebar_links = [
  {
    img_url: "/icons/layout-grid.svg",
    route: "/",
    label: "Overview",
  },
  {
    img_url: "/icons/wallet.svg",
    route: "/balances",
    label: "Balances",
  },
  {
    img_url: "/icons/arrow-left-right.svg",
    route: "/transactions",
    label: "Transactions",
  },
  {
    img_url: "/icons/receipt-text.svg",
    route: "/bills",
    label: "Bills",
  },
  {
    img_url: "/icons/banknote.svg",
    route: "/expenses",
    label: "Expenses",
  },
  {
    img_url: "/icons/target.svg",
    route: "/goals",
    label: "Goals",
  },
  {
    img_url: "/icons/settings.svg",
    route: "/settings",
    label: "Settings",
  },
];

// TODO: replace with my own categories styles
export const top_category_styles = {
  "Food and Drink": {
    bg: "bg-blue-25",
    circle_bg: "bg-blue-100",
    text: {
      main: "text-blue-900",
      count: "text-blue-700",
    },
    progress: {
      bg: "bg-blue-100",
      indicator: "bg-blue-700",
    },
    icon: "/icons/monitor.svg",
  },
  Travel: {
    bg: "bg-success-25",
    circle_bg: "bg-success-100",
    text: {
      main: "text-success-900",
      count: "text-success-700",
    },
    progress: {
      bg: "bg-success-100",
      indicator: "bg-success-700",
    },
    icon: "/icons/coins.svg",
  },
  default: {
    bg: "bg-pink-25",
    circle_bg: "bg-pink-100",
    text: {
      main: "text-pink-900",
      count: "text-pink-700",
    },
    progress: {
      bg: "bg-pink-100",
      indicator: "bg-pink-700",
    },
    icon: "/icons/shopping-bag.svg",
  },
};

export const transaction_category_styles = {
  "Food and Drink": {
    border_color: "border-pink-600",
    background_color: "bg-pink-500",
    text_color: "text-pink-700",
    chip_background_color: "bg-inherit",
  },
  Payment: {
    border_color: "border-success-600",
    background_color: "bg-green-600",
    text_color: "text-success-700",
    chip_background_color: "bg-inherit",
  },
  "Bank Fees": {
    border_color: "border-success-600",
    background_color: "bg-green-600",
    text_color: "text-success-700",
    chip_background_color: "bg-inherit",
  },
  Transfer: {
    border_color: "border-red-700",
    background_color: "bg-red-700",
    text_color: "text-red-700",
    chip_background_color: "bg-inherit",
  },
  Processing: {
    border_color: "border-[#F2F4F7]",
    background_color: "bg-gray-500",
    text_color: "text-[#344054]",
    chip_background_color: "bg-[#F2F4F7]",
  },
  Success: {
    border_color: "border-[#12B76A]",
    background_color: "bg-[#12B76A]",
    text_color: "text-[#027A48]",
    chip_background_color: "bg-[#ECFDF3]",
  },
  default: {
    border_color: "",
    background_color: "bg-blue-500",
    text_color: "text-blue-700",
    chip_background_color: "bg-inherit",
  },
};
// ----------------------------------------------------------------------
