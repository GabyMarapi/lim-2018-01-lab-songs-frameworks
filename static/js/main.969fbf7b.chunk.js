(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(2),s=n.n(i),o=(n(13),n(3)),c=n(4),l=n(6),u=n(5),d=n(7),m=(n(15),{textAlign:"center"}),f={width:"100%",height:"300px"},h={display:"flex",flexDirection:"row",justifyContent:"space-between"},b={display:"flex",flexDirection:"row",justifyContent:"space-between"},k=function(t){var e=t.data,n=t.onNext,a=t.onPrevious,i=t.onLike,s=t.onUnlike,o=e.songs.map(function(t,e){return r.a.createElement("li",{key:e,className:"list-group-item",style:h},r.a.createElement("h6",null,t.name),r.a.createElement("div",null,r.a.createElement("button",{id:e,type:"button",className:"btn btn-light btn-sm",onClick:function(t){i(t.target.id)}},r.a.createElement("i",{id:e,className:"far fa-heart"})),r.a.createElement("button",{id:e,type:"button",className:"btn btn-light btn-sm",onClick:function(t){s(t.target.id)}},r.a.createElement("i",{id:e,className:"far fa-thumbs-down"})),r.a.createElement("button",{type:"button",className:"btn btn-light btn-sm",disabled:!0},t.like)))});return r.a.createElement("div",{key:e.artist,className:"card",style:m},r.a.createElement("div",null,r.a.createElement("img",{className:"card-img-top",src:e.image,style:f,alt:"300px"})),r.a.createElement("div",{className:"card-body",style:b},r.a.createElement("button",{type:"button",className:"btn btn-light btn-sm",onClick:function(){a()}},r.a.createElement("i",{className:"fas fa-angle-double-left"})),r.a.createElement("h5",{className:"card-title"},e.artist),r.a.createElement("button",{type:"button",className:"btn btn-light btn-sm",onClick:function(){n()}},r.a.createElement("i",{className:"fas fa-angle-double-right"}))),r.a.createElement("ul",{className:"list-group list-group-flush"},o))},g=function(t){function e(){var t;return Object(o.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this))).handleNext=function(){var e=t.state;e.currentIndex===e.data.length-1?t.setState({currentIndex:0}):t.setState({currentIndex:t.state.currentIndex+1})},t.handlePrevious=function(){var e=t.state,n=e.currentIndex,a=e.data;0===n?t.setState({currentIndex:a.length-1}):t.setState({currentIndex:t.state.currentIndex-1})},t.handleUnlike=function(e){var n=t.state,a=n.data,r=n.currentIndex;0!==a[r].songs[e].like&&(a[r].songs[e].like--,a[r].songs.sort(function(t,e){return t.like<e.like}),t.setState({data:a}))},t.handleLike=function(e){var n=t.state,a=n.data,r=n.currentIndex;a[r].songs[e].like++,a[r].songs.sort(function(t,e){return t.like<e.like}),t.setState({data:a})},t.state={data:[],currentIndex:22},t}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentWillMount",value:function(){var t=this;fetch("https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=5c8e2c09c2a2396e6d24a126d15464fc&format=json").then(function(t){return t.json()}).then(function(e){Promise.all(e.artists.artist.map(function(t){return fetch("https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=".concat(t.name,"&api_key=5c8e2c09c2a2396e6d24a126d15464fc&format=json")).then(function(t){return t.json()})})).then(function(n){var a=n.map(function(t,n){return{artist:e.artists.artist[n].name,image:e.artists.artist[n].image[4]["#text"],songs:t.toptracks.track.filter(function(t){return t["@attr"].rank<=10}).map(function(t){return{name:t.name,like:t.playcount}}).sort(function(t,e){return t.like<e.like})}});t.setState({data:a})})})}},{key:"render",value:function(){var t=this,e={margin:"auto",width:"50%"},n=this.state,a=n.data,i=n.currentIndex,s=a.map(function(n,a){return r.a.createElement("div",{key:a,style:e},r.a.createElement(k,{data:n,onNext:t.handleNext,onPrevious:t.handlePrevious,onUnlike:t.handleUnlike,onLike:t.handleLike}),r.a.createElement("div",null))})[i];return r.a.createElement("div",null,s)}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,n){t.exports=n(17)}},[[8,2,1]]]);
//# sourceMappingURL=main.969fbf7b.chunk.js.map