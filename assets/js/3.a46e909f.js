(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{156:function(a,t,r){"use strict";r.r(t);var e=r(0),_=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"cdn"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdn","aria-hidden":"true"}},[a._v("#")]),a._v(" CDN")]),a._v(" "),r("h2",{attrs:{id:"概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),r("p",[a._v("CDN 的全称是 Content Delivery Network，即内容分发网络。CDN 是构建在网络之上的内容分发网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。CDN 的关键技术主要有内容存储和分发技术。")]),a._v(" "),r("h2",{attrs:{id:"基本原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本原理","aria-hidden":"true"}},[a._v("#")]),a._v(" 基本原理")]),a._v(" "),r("p",[a._v("CDN 的基本原理是广泛采用各种缓存服务器，将这些缓存服务器分布到用户访问相对集中的地区或网络中，在用户访问网站时，利用全局负载技术将用户的访问指向距离最近的工作正常的缓存服务器上，由缓存服务器直接响应用户请求。")]),a._v(" "),r("h2",{attrs:{id:"基本思路"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本思路","aria-hidden":"true"}},[a._v("#")]),a._v(" 基本思路")]),a._v(" "),r("p",[a._v("尽可能避开互联网上有可能影响数据传输速度和稳定性的瓶颈和环节，使内容传输更快、更稳定。通过在网络各处放置节点服务器所构成的在现有的互联网基础之上的一层智能虚拟网络，CDN 系统能够实时地根据网络流量和各节点的连接、负载状况以及到用户的距离和响应时间等综合信息将用户的请求重新导向离用户最近的服务节点上。")]),a._v(" "),r("h2",{attrs:{id:"服务模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 服务模式")]),a._v(" "),r("p",[a._v("内容分发网络(CDN)是一种新型网络构建方式，它是为能在传统的 IP 网发布宽带丰富媒体而特别优化的网络覆盖层；而从广义的角度，CDN 代表了一种基于质量与秩序的网络服务模式。")]),a._v(" "),r("p",[a._v("内容分发网络(CDN)是一个经策略性部署的整体系统，包括分布式存储、负载均衡、网络请求的重定向和内容管理 4 个要件，而内容管理和全局的网络流量管理(Traffic Management)是 CDN 的核心所在。通过用户就近性和服务器负载的判断，CDN 确保内容以一种极为高效的方式为用户的请求提供服务。")]),a._v(" "),r("h2",{attrs:{id:"关键技术"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#关键技术","aria-hidden":"true"}},[a._v("#")]),a._v(" 关键技术")]),a._v(" "),r("ul",[r("li",[a._v("内容发布：它借助于建立索引、缓存、流分裂、组播（Multicast）等技术，将内容发布或投递到距离用户最近的远程服务点（POP）处；")]),a._v(" "),r("li",[a._v("内容路由：它是整体性的网络负载均衡技术，通过内容路由器中的重定向（DNS）机制，在多个远程 POP 上均衡用户的请求，以使用户请求得到最近内容源的响应；")]),a._v(" "),r("li",[a._v("内容交换：它根据内容的可用性、服务器的可用性以及用户的背景，在 POP 的缓存服务器上，利用应用层交换、流分裂、重定向（ICP、WCCP）等技术，智能地平衡负载流量；")]),a._v(" "),r("li",[a._v("性能管理：它通过内部和外部监控系统，获取网络部件的状况信息，测量内容发布的端到端性能（如包丢失、延时、平均带宽、启动时间、帧速率等），保证网络处于最佳的运行状态。")])]),a._v(" "),r("h2",{attrs:{id:"主要特点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#主要特点","aria-hidden":"true"}},[a._v("#")]),a._v(" 主要特点")]),a._v(" "),r("ul",[r("li",[a._v("本地 Cache 加速 提高了企业站点(尤其含有大量图片和静态页面站点)的访问速度，并大大提高以上性质站点的稳定性")]),a._v(" "),r("li",[a._v("镜像服务 消除了不同运营商之间互联的瓶颈造成的影响，实现了跨运营商的网络加速，保证不同网络中的用户都能得到良好的访问质量。")]),a._v(" "),r("li",[a._v("远程加速 远程访问用户根据 DNS 负载均衡技术智能自动选择 Cache 服务器，选择最快的 Cache 服务器，加快远程访问的速度")]),a._v(" "),r("li",[a._v("带宽优化 自动生成服务器的远程 Mirror（镜像）cache 服务器，远程用户访问时从 cache 服务器上读取数据，减少远程访问的带宽、分担网络流量、减轻原站点 WEB 服务器负载等功能。")]),a._v(" "),r("li",[a._v("群抗攻击 广泛分布的 CDN 节点加上节点之间的智能冗余机制，可以有效地预防黑客入侵以及降低各种 D.D.o.S 攻击对网站的影响，同时保证较好的服务质量 。")])]),a._v(" "),r("h2",{attrs:{id:"负载均衡技术"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡技术","aria-hidden":"true"}},[a._v("#")]),a._v(" 负载均衡技术")]),a._v(" "),r("p",[a._v("载均衡是整个 CDN 的核心，负载均衡的准确性和效率直接决定了整个 CDN 的效率和性能。\n负载均衡技术将网络的流量尽可能均匀地分配到几个能完成相同任务的服务器或网络节点上进行处理，避免部分网络节点过载而另一部分节点空闲的不利状况，既可以提高网络流量，又可以提高网络的整体性能。")])])}],!1,null,null,null);_.options.__file="CDN.md";t.default=_.exports}}]);