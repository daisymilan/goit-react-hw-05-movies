"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[820],{713:function(e,t,r){r.d(t,{Hx:function(){return f},Y5:function(){return o},mv:function(){return c},uV:function(){return v},wr:function(){return u}});var n=r(861),a=r(757),i=r.n(a),s=r(759);s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.params={api_key:"b86981a07e5296001ff10a61d56b5942"};var u=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie?query=".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"/credits"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"/reviews"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},645:function(e,t,r){r.d(t,{e:function(){return v}});var n="MovieList_movieListContainer__Rv+1M",a="MovieList_movieList__uFrOZ",i={movieItem:"MovieListItem_movieItem__mZL09",movieImage:"MovieListItem_movieImage__CGbex",movieTitle:"MovieListItem_movieTitle__qARPK"},s=r(689),u=r(87),c=r(184),o=function(e){var t=e.id,r=e.title,n=e.posterPath,a=(0,s.TH)();return(0,c.jsx)("li",{className:i.movieItem,children:(0,c.jsxs)(u.rU,{to:"/movies/".concat(t),state:{from:a,movieTitle:r},className:i.movieLink,children:[(0,c.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(n),alt:r,className:i.movieImage}),(0,c.jsx)("h3",{className:i.movieTitle,children:r})]})})},v=function(e){var t=e.movies;return(0,c.jsx)("div",{className:n,children:(0,c.jsx)("ul",{className:a,children:t.map((function(e){var t=e.id,r=e.title,n=e.poster_path;return(0,c.jsx)(o,{id:t,title:r,posterPath:n},t)}))})})}},820:function(e,t,r){r.r(t);var n=r(861),a=r(439),i=r(757),s=r.n(i),u=r(791),c=r(645),o=r(713),v=r(184);t.default=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),r=t[0],i=t[1],f=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.wr)();case 3:t=e.sent,i(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){f()}),[]),(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{style:{textAlign:"center"},children:"Trending Movies"}),r.length?(0,v.jsx)(c.e,{movies:r}):(0,v.jsx)("p",{children:"No movies found"})]})}}}]);
//# sourceMappingURL=820.90fca6db.chunk.js.map