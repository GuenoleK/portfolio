import moment from "moment";

class MomentUtil {

    momentLocale = {
            relativeTime: {
                future: "%s restant",
                past: "il y a %s",
                s: "quelque secondes",
                ss: "%d secondes",
                m: "1 minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "1 jour",
                dd: "%d jours",
                M: "1 mois",
                MM: "%d mois",
                y: "1 an",
                yy: "%d ans"
            }
    };

    date() {
        moment.updateLocale("fr", this.momentLocale);
        return moment;
    }
}

export const momentUtil = new MomentUtil();
