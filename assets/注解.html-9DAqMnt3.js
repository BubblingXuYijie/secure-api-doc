import{_ as t,c as e,o as a,a as r}from"./app-BxG_fo_4.js";const n={},c=r('<h1 id="注解" tabindex="-1"><a class="header-anchor" href="#注解"><span>注解</span></a></h1><p>组件共有 5 个注解：<code>@EncryptApi</code> <code>@DecryptApi</code> <code>@DecryptParam</code> <code>@DecryptIgnore</code> <code>@DecryptIgnore</code> ，如果配置了url匹配，那么匹配到的接口无需使用下列注解就可以进行对应加解密。</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p><em>请非常注意！！！</em>，不要对需要解密的参数使用 @RequestParam，会导致解密功能失效（即使在配置了url匹配的情况下也会失效），@DecryptParam 提供了和 @RequestParam 相同的能力，使用 @DecryptParam 即可。</p></div><p>下面所说的 “接口” 均为 @RestController 标记的方法，不是 interface 方法，明确一下避免歧义</p><h2 id="encryptapi" tabindex="-1"><a class="header-anchor" href="#encryptapi"><span><code>@EncryptApi</code></span></a></h2><table><thead><tr><th style="text-align:center;">注解作用</th><th style="text-align:center;">添加位置</th><th style="text-align:center;">注解字段</th><th style="text-align:center;">注意事项</th></tr></thead><tbody><tr><td style="text-align:center;">加密接口返回值</td><td style="text-align:center;">接口或接口所在类上</td><td style="text-align:center;">无</td><td style="text-align:center;">优先级高于url匹配，即使接口没有匹配到，添加了此注解也会进行返回值加密</td></tr></tbody></table><h2 id="decryptapi" tabindex="-1"><a class="header-anchor" href="#decryptapi"><span><code>@DecryptApi</code></span></a></h2><table><thead><tr><th style="text-align:center;">注解作用</th><th style="text-align:center;">添加位置</th><th style="text-align:center;">注解字段</th><th style="text-align:center;">注意事项</th></tr></thead><tbody><tr><td style="text-align:center;">解密接口json参数值（也就是<code>@RequestBody</code>标记的参数）</td><td style="text-align:center;">接口或接口所在类上</td><td style="text-align:center;">无</td><td style="text-align:center;">优先级高于url匹配，即使接口没有匹配到，添加了此注解也会进行参数解密</td></tr></tbody></table><h2 id="decryptparam" tabindex="-1"><a class="header-anchor" href="#decryptparam"><span><code>@DecryptParam</code></span></a></h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p><em>再次提醒！！！请非常注意！！！</em>，不要对需要解密的参数使用 @RequestParam，会导致解密功能失效（即使在配置了url匹配的情况下也会失效），@DecryptParam 提供了和 @RequestParam 相同的能力，使用 @DecryptParam 即可。</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>暂不支持 MultipartFile 的解密，后续会进行开发</p></div><table><thead><tr><th style="text-align:center;">注解作用</th><th style="text-align:center;">添加位置</th><th style="text-align:center;">注解字段</th><th style="text-align:center;">注意事项</th></tr></thead><tbody><tr><td style="text-align:center;">解密接口param和form-data参数值</td><td style="text-align:center;">接口非实体类参数或接口实体类参数字段上</td><td style="text-align:center;">同<code>@RequestParam</code></td><td style="text-align:center;">优先级高于url匹配，即使接口没有匹配到，添加了此注解也会进行参数解密；此外，此注解不可与<code>@RequestParam</code>同时使用，会导致解密功能失效，此注解已经代替了<code>@RequestParam</code>功能，内部字段功能和<code>@RequestParam</code>相同</td></tr></tbody></table><h2 id="decryptignore" tabindex="-1"><a class="header-anchor" href="#decryptignore"><span><code>@DecryptIgnore</code></span></a></h2><table><thead><tr><th style="text-align:center;">注解作用</th><th style="text-align:center;">添加位置</th><th style="text-align:center;">注解字段</th><th style="text-align:center;">注意事项</th></tr></thead><tbody><tr><td style="text-align:center;">忽略解密</td><td style="text-align:center;">类、方法、参数、字段</td><td style="text-align:center;">无</td><td style="text-align:center;">无</td></tr></tbody></table><h2 id="encryptignore" tabindex="-1"><a class="header-anchor" href="#encryptignore"><span><code>@EncryptIgnore</code></span></a></h2><table><thead><tr><th style="text-align:center;">注解作用</th><th style="text-align:center;">添加位置</th><th style="text-align:center;">注解字段</th><th style="text-align:center;">注意事项</th></tr></thead><tbody><tr><td style="text-align:center;">忽略加密</td><td style="text-align:center;">类、方法、参数、字段</td><td style="text-align:center;">无</td><td style="text-align:center;">无</td></tr></tbody></table>',16),l=[c];function d(i,s){return a(),e("div",null,l)}const h=t(n,[["render",d],["__file","注解.html.vue"]]),p=JSON.parse('{"path":"/%E6%B3%A8%E8%A7%A3.html","title":"注解","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"@EncryptApi","slug":"encryptapi","link":"#encryptapi","children":[]},{"level":2,"title":"@DecryptApi","slug":"decryptapi","link":"#decryptapi","children":[]},{"level":2,"title":"@DecryptParam","slug":"decryptparam","link":"#decryptparam","children":[]},{"level":2,"title":"@DecryptIgnore","slug":"decryptignore","link":"#decryptignore","children":[]},{"level":2,"title":"@EncryptIgnore","slug":"encryptignore","link":"#encryptignore","children":[]}],"git":{"updatedTime":1744278686000,"contributors":[{"name":"XuYijie","email":"1119461672@qq.com","commits":5}]},"filePathRelative":"注解.md"}');export{h as comp,p as data};
