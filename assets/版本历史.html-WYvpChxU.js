import{_ as l,c as a,o as e,a as i}from"./app-DLL5XhxW.js";const n={},h=i('<h1 id="版本历史" tabindex="-1"><a class="header-anchor" href="#版本历史"><span>版本历史</span></a></h1><blockquote><p>目前 2.x (spring boot 2) 和 3.x (spring boot 3) 版本会同步更新，功能相同，也许后面会停更2.x，毕竟2024年了。</p></blockquote><h2 id="_3-1-2" tabindex="-1"><a class="header-anchor" href="#_3-1-2"><span>😃 3.1.2</span></a></h2><p>功能：</p><ul><li>更好的反序列化 List 字符串</li><li>param 参数解密采用异步编排，提高了性能</li><li>增加测试 http 文件</li><li>升级 spring boot 到 3.3.6</li></ul><p>修复：</p><ul><li>处理不可变数组类型的参数解密：如 String[]、Long[]</li></ul><h2 id="_2-1-9" tabindex="-1"><a class="header-anchor" href="#_2-1-9"><span>😃 2.1.9</span></a></h2><p>功能：</p><ul><li>更好的反序列化 List 字符串</li><li>param 参数解密采用异步编排，提高了性能</li><li>增加测试 http 文件</li><li>升级 spring boot到 3.3.6</li></ul><p>修复：</p><ul><li>处理不可变数组类型的参数解密：如 String[]、Long[]</li></ul><h2 id="_3-1-1" tabindex="-1"><a class="header-anchor" href="#_3-1-1"><span>😃 3.1.1</span></a></h2><p>修复：</p><ul><li>json字符串解密的引号处理问题</li></ul><h2 id="_2-1-8" tabindex="-1"><a class="header-anchor" href="#_2-1-8"><span>😃 2.1.8</span></a></h2><p>修复：</p><ul><li>json字符串解密的引号处理问题</li></ul><h2 id="_3-1-0" tabindex="-1"><a class="header-anchor" href="#_3-1-0"><span>😃 3.1.0</span></a></h2><p>修复：</p><ul><li>日期数组参数解密后空格丢失问题</li></ul><h2 id="_2-1-7" tabindex="-1"><a class="header-anchor" href="#_2-1-7"><span>😃 2.1.7</span></a></h2><p>修复：</p><ul><li>日期数组参数解密后空格丢失问题</li></ul><h2 id="_3-0-9" tabindex="-1"><a class="header-anchor" href="#_3-0-9"><span>😃 3.0.9</span></a></h2><p>修复：</p><ul><li>日期格式化问题，增加各种类型日期格式化配置</li></ul><h2 id="_2-1-6" tabindex="-1"><a class="header-anchor" href="#_2-1-6"><span>😃 2.1.6</span></a></h2><p>修复：</p><ul><li>日期格式化问题，增加各种类型日期格式化配置</li></ul><h2 id="_3-0-8" tabindex="-1"><a class="header-anchor" href="#_3-0-8"><span>😃 3.0.8</span></a></h2><p>修复：</p><ul><li>RSA加密时明文过长加密失败问题</li></ul><h2 id="_2-1-5" tabindex="-1"><a class="header-anchor" href="#_2-1-5"><span>😃 2.1.5</span></a></h2><p>修复：</p><ul><li>RSA加密时明文过长加密失败问题</li></ul><h2 id="_3-0-7" tabindex="-1"><a class="header-anchor" href="#_3-0-7"><span>😃 3.0.7</span></a></h2><p>修复：</p><ul><li>param形式的实体类参数父类字段值丢失问题</li></ul><h2 id="_2-1-4" tabindex="-1"><a class="header-anchor" href="#_2-1-4"><span>😃 2.1.4</span></a></h2><p>修复：</p><ul><li>param形式的实体类参数父类字段值丢失问题</li></ul><h2 id="_3-0-6" tabindex="-1"><a class="header-anchor" href="#_3-0-6"><span>😃 3.0.6</span></a></h2><p>功能：</p><ul><li>支持 SM4 加密算法</li></ul><p>修改：</p><ul><li>组件的 enabled 配置项默认值改为 false</li></ul><h2 id="_2-1-3" tabindex="-1"><a class="header-anchor" href="#_2-1-3"><span>😃 2.1.3</span></a></h2><p>功能：</p><ul><li>支持 SM4 加密算法</li></ul><p>修改：</p><ul><li>组件的 enabled 配置项默认值改为 false</li></ul><h2 id="_3-0-5" tabindex="-1"><a class="header-anchor" href="#_3-0-5"><span>😃 3.0.5</span></a></h2><p>功能：</p><ul><li>从此版本开始，如果在配置文件关闭了加密功能，则 @DecryptParam 注解也失去参数处理功能，也就是说加了此注解和没加一样</li><li>增加param/formData参数解密日志打印</li></ul><p>修复：</p><ul><li>实体类接收param/formData参数进行解密，有final字段或基础类型传入字段值为null时导致实体类字段值都为空</li></ul><h2 id="_2-1-2" tabindex="-1"><a class="header-anchor" href="#_2-1-2"><span>😃 2.1.2</span></a></h2><p>功能：</p><ul><li>从此版本开始，如果在配置文件关闭了加密功能，则 @DecryptParam 注解也失去参数处理功能，也就是说加了此注解和没加一样</li><li>增加param/formData参数解密日志打印</li></ul><p>修复：</p><ul><li>实体类接收param/formData参数进行解密，有final字段或基础类型传入字段值为null时导致实体类字段值都为空</li></ul><h2 id="_3-0-4" tabindex="-1"><a class="header-anchor" href="#_3-0-4"><span>😃 3.0.4</span></a></h2><p>修复：</p><ul><li>修复yml配置文件中加密算法和会话密钥算法枚举类配置不生效的问题</li></ul><h2 id="_2-1-1" tabindex="-1"><a class="header-anchor" href="#_2-1-1"><span>😃 2.1.1</span></a></h2><p>修复：</p><ul><li>修复yml配置文件中加密算法和会话密钥算法枚举类配置不生效的问题</li></ul><h2 id="_3-0-3" tabindex="-1"><a class="header-anchor" href="#_3-0-3"><span>😃 3.0.3</span></a></h2><p>修复：</p><ul><li>@DecryptParam注解解析的List为不可变的数组导致的add等方法异常问题</li></ul><h2 id="_2-1-0" tabindex="-1"><a class="header-anchor" href="#_2-1-0"><span>😃 2.1.0</span></a></h2><p>修复：</p><ul><li>@DecryptParam注解解析的List为不可变的数组导致的add等方法异常问题</li></ul><h2 id="_2-0-9" tabindex="-1"><a class="header-anchor" href="#_2-0-9"><span>😃 2.0.9</span></a></h2><p>修复：</p><ul><li>spring boot 2.7 版本以下的兼容性问题</li></ul><h2 id="_3-0-2" tabindex="-1"><a class="header-anchor" href="#_3-0-2"><span>😃 3.0.2</span></a></h2><p>功能：</p><ul><li>增加配置项：url-safe，来决定生成的key和密文等是否是符合url规范的，这样你可以在url地址中传输</li></ul><h2 id="_2-0-8" tabindex="-1"><a class="header-anchor" href="#_2-0-8"><span>😃 2.0.8</span></a></h2><p>功能：</p><ul><li>增加配置项：url-safe，来决定生成的key和密文等是否是符合url规范的，这样你可以在url地址中传输</li></ul><h2 id="_3-0-1" tabindex="-1"><a class="header-anchor" href="#_3-0-1"><span>😃 3.0.1</span></a></h2><p>功能：</p><ul><li>会话密钥支持所有对称算法</li></ul><h2 id="_2-0-7" tabindex="-1"><a class="header-anchor" href="#_2-0-7"><span>😃 2.0.7</span></a></h2><p>功能：</p><ul><li>会话密钥支持所有对称算法</li></ul><h2 id="_3-0-0" tabindex="-1"><a class="header-anchor" href="#_3-0-0"><span>😃 3.0.0</span></a></h2><p>支持spring boot 3 以上的稳定版本！！！</p><h2 id="_2-0-6" tabindex="-1"><a class="header-anchor" href="#_2-0-6"><span>😃 2.0.6</span></a></h2><p>第一个各项功能没有问题的稳定版本！！！支持spring boot 2</p><h2 id="❌-2-0-5-已弃用" tabindex="-1"><a class="header-anchor" href="#❌-2-0-5-已弃用"><span>❌ 2.0.5（已弃用）</span></a></h2><p>问题：</p><ul><li>提供的 DH 密钥协商算法不是 url safe 的</li></ul><h2 id="❌-2-0-4-已弃用" tabindex="-1"><a class="header-anchor" href="#❌-2-0-4-已弃用"><span>❌ 2.0.4（已弃用）</span></a></h2><p>问题：</p><ul><li>SecureApi 的 enable 设置为 false 任然会解密 param 和 form-data 参数</li><li>CipherUtils 方法名过时</li></ul><h2 id="❌-2-0-3-已弃用" tabindex="-1"><a class="header-anchor" href="#❌-2-0-3-已弃用"><span>❌ 2.0.3（已弃用）</span></a></h2><p>问题：</p><ul><li>不完全支持 param 和 form-data 参数解密</li><li>param 和 form-data 参数解密后复杂类型转换有问题</li></ul><h2 id="❌-2-0-2-已弃用" tabindex="-1"><a class="header-anchor" href="#❌-2-0-2-已弃用"><span>❌ 2.0.2（已弃用）</span></a></h2><p>问题：</p><ul><li>下载jar包不完整</li></ul><h2 id="❌-2-0-1-已弃用" tabindex="-1"><a class="header-anchor" href="#❌-2-0-1-已弃用"><span>❌ 2.0.1（已弃用）</span></a></h2><p>问题：</p><ul><li>无法下载</li></ul><h2 id="❌-2-0-0-已弃用" tabindex="-1"><a class="header-anchor" href="#❌-2-0-0-已弃用"><span>❌ 2.0.0（已弃用）</span></a></h2><p>问题：</p><ul><li>无法下载</li></ul>',111),s=[h];function r(p,t){return e(),a("div",null,s)}const c=l(n,[["render",r],["__file","版本历史.html.vue"]]),_=JSON.parse('{"path":"/%E7%89%88%E6%9C%AC%E5%8E%86%E5%8F%B2.html","title":"版本历史","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"😃 3.1.2","slug":"_3-1-2","link":"#_3-1-2","children":[]},{"level":2,"title":"😃 2.1.9","slug":"_2-1-9","link":"#_2-1-9","children":[]},{"level":2,"title":"😃 3.1.1","slug":"_3-1-1","link":"#_3-1-1","children":[]},{"level":2,"title":"😃 2.1.8","slug":"_2-1-8","link":"#_2-1-8","children":[]},{"level":2,"title":"😃 3.1.0","slug":"_3-1-0","link":"#_3-1-0","children":[]},{"level":2,"title":"😃 2.1.7","slug":"_2-1-7","link":"#_2-1-7","children":[]},{"level":2,"title":"😃 3.0.9","slug":"_3-0-9","link":"#_3-0-9","children":[]},{"level":2,"title":"😃 2.1.6","slug":"_2-1-6","link":"#_2-1-6","children":[]},{"level":2,"title":"😃 3.0.8","slug":"_3-0-8","link":"#_3-0-8","children":[]},{"level":2,"title":"😃 2.1.5","slug":"_2-1-5","link":"#_2-1-5","children":[]},{"level":2,"title":"😃 3.0.7","slug":"_3-0-7","link":"#_3-0-7","children":[]},{"level":2,"title":"😃 2.1.4","slug":"_2-1-4","link":"#_2-1-4","children":[]},{"level":2,"title":"😃 3.0.6","slug":"_3-0-6","link":"#_3-0-6","children":[]},{"level":2,"title":"😃 2.1.3","slug":"_2-1-3","link":"#_2-1-3","children":[]},{"level":2,"title":"😃 3.0.5","slug":"_3-0-5","link":"#_3-0-5","children":[]},{"level":2,"title":"😃 2.1.2","slug":"_2-1-2","link":"#_2-1-2","children":[]},{"level":2,"title":"😃 3.0.4","slug":"_3-0-4","link":"#_3-0-4","children":[]},{"level":2,"title":"😃 2.1.1","slug":"_2-1-1","link":"#_2-1-1","children":[]},{"level":2,"title":"😃 3.0.3","slug":"_3-0-3","link":"#_3-0-3","children":[]},{"level":2,"title":"😃 2.1.0","slug":"_2-1-0","link":"#_2-1-0","children":[]},{"level":2,"title":"😃 2.0.9","slug":"_2-0-9","link":"#_2-0-9","children":[]},{"level":2,"title":"😃 3.0.2","slug":"_3-0-2","link":"#_3-0-2","children":[]},{"level":2,"title":"😃 2.0.8","slug":"_2-0-8","link":"#_2-0-8","children":[]},{"level":2,"title":"😃 3.0.1","slug":"_3-0-1","link":"#_3-0-1","children":[]},{"level":2,"title":"😃 2.0.7","slug":"_2-0-7","link":"#_2-0-7","children":[]},{"level":2,"title":"😃 3.0.0","slug":"_3-0-0","link":"#_3-0-0","children":[]},{"level":2,"title":"😃 2.0.6","slug":"_2-0-6","link":"#_2-0-6","children":[]},{"level":2,"title":"❌ 2.0.5（已弃用）","slug":"❌-2-0-5-已弃用","link":"#❌-2-0-5-已弃用","children":[]},{"level":2,"title":"❌ 2.0.4（已弃用）","slug":"❌-2-0-4-已弃用","link":"#❌-2-0-4-已弃用","children":[]},{"level":2,"title":"❌ 2.0.3（已弃用）","slug":"❌-2-0-3-已弃用","link":"#❌-2-0-3-已弃用","children":[]},{"level":2,"title":"❌ 2.0.2（已弃用）","slug":"❌-2-0-2-已弃用","link":"#❌-2-0-2-已弃用","children":[]},{"level":2,"title":"❌ 2.0.1（已弃用）","slug":"❌-2-0-1-已弃用","link":"#❌-2-0-1-已弃用","children":[]},{"level":2,"title":"❌ 2.0.0（已弃用）","slug":"❌-2-0-0-已弃用","link":"#❌-2-0-0-已弃用","children":[]}],"git":{"updatedTime":1732593959000,"contributors":[{"name":"XuYijie","email":"1119461672@qq.com","commits":21}]},"filePathRelative":"版本历史.md"}');export{c as comp,_ as data};
