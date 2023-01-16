import { defineStore } from "pinia";
import axios from "axios";

export interface Clients {
  id: number;
  avatar: string;
  login: string;
  name: string;
  company: string;
  city: string;
  progress: number;
  created: string;
  created_mm_dd_yyyy: string;
}

export interface History {
  amount: number;
  account: string;
  name: string;
  date: string;
  type: string;
  business: string;
}

export interface MainState {
  userName: string | null;
  userEmail: string | null;
  userAvatar: string | null;
  isFieldFocusRegistered: boolean;
  clients: Clients[];
  history: History[];
}

export const useMainStore = defineStore("main", {
  state: (): MainState => ({
    /* User */
    userName: null,
    userEmail: null,
    userAvatar: null,

    /* Field focus with ctrl+k (to register only once) */
    isFieldFocusRegistered: false,

    /* Sample data (commonly used) */
    clients: [],
    history: [],
  }),
  actions: {
    setUser(payload: { name?: string; email?: string; avatar?: string }) {
      if (payload.name) {
        this.userName = payload.name;
      }
      if (payload.email) {
        this.userEmail = payload.email;
      }
      if (payload.avatar) {
        this.userAvatar = payload.avatar;
      }
    },

    fetch(sampleDataKey: string) {
      axios
        .get(`data-sources/${sampleDataKey}.json`)
        .then((r) => {
          if (r.data && r.data.data) {
            (this as any)[sampleDataKey] = r.data.data;
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
});
