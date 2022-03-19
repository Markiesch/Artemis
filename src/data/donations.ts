import { ref } from "vue";

export interface IDonation {
  donator: string;
  email: string;
  amount: number;
  message?: string;
}

export const donationTarget = 1200;

export const donations = ref<IDonation[]>([
  {
    donator: "Sjoerd Wendel",
    email: "sjoerdwendel@gmail.com",
    amount: 10,
    message: "Zet hem op!",
  },
  {
    donator: "Matthijs Verkerk",
    email: "matthijs.v@gmail.com",
    amount: 26,
    message: "Koop er iets leuk van",
  },
  {
    donator: "Robin Schutte",
    email: "r.schutte@gmail.com",
    amount: 34,
  },
  {
    donator: "Daniel Kok",
    email: "daniel.kok@gmail.com",
    amount: 80,
    message: "Een creatief bericht",
  },
  {
    donator: "Lenie Moerman",
    email: "len.moerman@gmail.com",
    amount: 75,
  },
  {
    donator: "Wout Kuijpers",
    email: "w.kuijpers@outlook.com",
    amount: 53,
  },
  {
    donator: "Jens Huisman",
    email: "huisman.jens@yahoo.com",
    amount: 14,
    message: "Zet hem op",
  },
  {
    donator: "Arie Verheul",
    email: "a.verheul@gmail.com",
    amount: 60,
  },
]);

export function initDonations() {
  const storageDonations = localStorage.getItem("donations");
  if (storageDonations) donations.value = JSON.parse(storageDonations);
}

export function addDonation(donator: string, email: string, amount: number, message: string) {
  donations.value.unshift({ donator, email, amount, message });
  saveDonations();
}

export function getTotal() {
  return donations.value.reduce((total, donation) => total + donation.amount, 0);
}

export function getPercentage() {
  return Math.round((getTotal() * 100) / donationTarget);
}

function saveDonations() {
  localStorage.setItem("donations", JSON.stringify(donations.value));
}
