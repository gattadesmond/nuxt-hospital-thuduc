import Vue from "vue";
import moment from "moment";

Vue.filter("formatDate", function(value) {
  if (!value) return "";
  value = value.toString();
  return moment(String(value)).format("DD/MM/YY hh:mm");
});

Vue.filter("formatDate2", function(value) {
    if (!value) return "";
    value = value.toString();
    return moment(String(value)).format("hh:mm DD/MM/YYYY");
  });
  Vue.filter("formatDate3", function(value) {
    if (!value) return "";
    value = value.toString();
    return moment(String(value)).format("DD/MM/YYYY");
  });
  

  Vue.filter("formatPrice", function(value) {
    if (!value) return "";
    var formatter = new Intl.NumberFormat('vi-VI', {
        maximumSignificantDigits: 3
    });
    return formatter.format(value);
  });
  