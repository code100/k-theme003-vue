(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ba0fc"],{3636:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"},[t.subscribersGained.analyticsData?a("statistics-card-line",{attrs:{icon:"UsersIcon",statistic:t._f("k_formatter")(t.subscribersGained.analyticsData.subscribers),statisticTitle:"Subscribers Gained",chartData:t.subscribersGained.series,type:"area"}}):t._e()],1),a("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"},[t.revenueGenerated.analyticsData?a("statistics-card-line",{attrs:{icon:"DollarSignIcon",statistic:t._f("k_formatter")(t.revenueGenerated.analyticsData.revenue),statisticTitle:"Revenue Generated",chartData:t.revenueGenerated.series,color:"success",type:"area"}}):t._e()],1),a("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"},[t.quarterlySales.analyticsData?a("statistics-card-line",{attrs:{icon:"ShoppingCartIcon",statistic:t.quarterlySales.analyticsData.sales,statisticTitle:"Quarterly Sales",chartData:t.quarterlySales.series,color:"danger",type:"area"}}):t._e()],1),a("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"},[t.ordersRecevied.analyticsData?a("statistics-card-line",{attrs:{icon:"ShoppingBagIcon",statistic:t._f("k_formatter")(t.ordersRecevied.analyticsData.orders),statisticTitle:"Orders Received",chartData:t.ordersRecevied.series,color:"warning",type:"area"}}):t._e()],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3"},[a("statistics-card-line",{attrs:{icon:"MonitorIcon","icon-right":"",statistic:"78.9k",statisticTitle:"Site Traffic",chartData:t.siteTraffic.series}})],1),a("div",{staticClass:"vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3"},[a("statistics-card-line",{attrs:{icon:"UserCheckIcon","icon-right":"",statistic:"659.8k",statisticTitle:"Active Users",chartData:t.activeUsers.series,color:"success"}})],1),a("div",{staticClass:"vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3"},[a("statistics-card-line",{attrs:{icon:"MailIcon","icon-right":"",statistic:"28.7k",statisticTitle:"Newsletter",chartData:t.newsletter.series,color:"warning"}})],1)])])},i=[],c=a("43ca"),r={components:{StatisticsCardLine:c["a"]},data:function(){return{subscribersGained:{},revenueGenerated:{},quarterlySales:{},ordersRecevied:{},siteTraffic:{},activeUsers:{},newsletter:{}}},created:function(){var t=this;this.$http.get("/api/card/card-statistics/subscribers").then((function(s){t.subscribersGained=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-statistics/revenue").then((function(s){t.revenueGenerated=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-statistics/sales").then((function(s){t.quarterlySales=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-statistics/orders").then((function(s){t.ordersRecevied=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-statistics/site-traffic").then((function(s){t.siteTraffic=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-statistics/active-users").then((function(s){t.activeUsers=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-statistics/newsletter").then((function(s){t.newsletter=s.data})).catch((function(t){console.log(t)}))}},n=r,l=a("2877"),o=Object(l["a"])(n,e,i,!1,null,null,null);s["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0ba0fc.723690ad.js.map