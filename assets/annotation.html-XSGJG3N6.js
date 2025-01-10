import{_ as t,c as e,o as a,a as n}from"./app-yWSSgKME.js";const i={},r=n('<h1 id="annotation" tabindex="-1"><a class="header-anchor" href="#annotation"><span>Annotation</span></a></h1><p>The component has a total of 3 annotations: <code>@EncryptApi</code> <code>@DecryptApi</code> <code>@DecryptParam</code>，If URL matching is configured, then the matching interface can be encrypted and decrypted without using the following annotations.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p><em>Please be very careful！！！</em>, Do not use @RequestParam for parameters that need to be decrypted, which will cause the decryption function to fail (even if the URL match is configured). @DecryptParam provides the same capabilities as @RequestParam, just use @DecryptParam.</p></div><p>The &quot;interfaces&quot; mentioned below are all methods marked by @RestController, not interface methods. Please make it clear to avoid ambiguity.</p><h2 id="encryptapi" tabindex="-1"><a class="header-anchor" href="#encryptapi"><span><code>@EncryptApi</code></span></a></h2><table><thead><tr><th style="text-align:center;">Annotations function</th><th style="text-align:center;">Use position</th><th style="text-align:center;">Field</th><th style="text-align:center;">Notes</th></tr></thead><tbody><tr><td style="text-align:center;">Encryption interface return value</td><td style="text-align:center;">The interface or the class where the interface is located</td><td style="text-align:center;">Not have</td><td style="text-align:center;">The priority is higher than the url match. Even if the interface does not match, adding this annotation will encrypt the return value.</td></tr></tbody></table><h2 id="decryptapi" tabindex="-1"><a class="header-anchor" href="#decryptapi"><span><code>@DecryptApi</code></span></a></h2><table><thead><tr><th style="text-align:center;">Annotations function</th><th style="text-align:center;">Use position</th><th style="text-align:center;">Field</th><th style="text-align:center;">Notes</th></tr></thead><tbody><tr><td style="text-align:center;">Decrypt the interface json parameter value (that is, the parameter marked with <code>@RequestBody</code>)</td><td style="text-align:center;">The interface or the class where the interface is located</td><td style="text-align:center;">Not have</td><td style="text-align:center;">The priority is higher than the url match. Even if the interface is not matched, adding this annotation will decrypt the parameters.</td></tr></tbody></table><h2 id="decryptparam" tabindex="-1"><a class="header-anchor" href="#decryptparam"><span><code>@DecryptParam</code></span></a></h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p><em>Remind again!!! Please be very careful!!!</em>, Do not use @RequestParam for parameters that need to be decrypted, which will cause the decryption function to fail (even if the URL match is configured). @DecryptParam provides the same capabilities as @RequestParam, just use @DecryptParam.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>MultipartFile decryption is not supported for the time being, and will be developed in the future.</p></div><table><thead><tr><th style="text-align:center;">Annotations function</th><th style="text-align:center;">Use position</th><th style="text-align:center;">Field</th><th style="text-align:center;">Notes</th></tr></thead><tbody><tr><td style="text-align:center;">Decrypt interface param and form-data parameter values</td><td style="text-align:center;">Interface non-entity class parameter or interface entity class parameter field</td><td style="text-align:center;">Same as <code>@RequestParam</code></td><td style="text-align:center;">The priority is higher than the URL match, even if the interface does not match, adding this annotation will decrypt the parameters; in addition, this annotation cannot be used with <code>@RequestParam</code> at the same time, which will cause the decryption function to fail. This annotation has replaced the <code>@RequestParam</code> function, and the internal field function is the same as <code>@RequestParam</code></td></tr></tbody></table>',12),c=[r];function o(s,d){return a(),e("div",null,c)}const h=t(i,[["render",o],["__file","annotation.html.vue"]]),p=JSON.parse('{"path":"/en/annotation.html","title":"Annotation","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"@EncryptApi","slug":"encryptapi","link":"#encryptapi","children":[]},{"level":2,"title":"@DecryptApi","slug":"decryptapi","link":"#decryptapi","children":[]},{"level":2,"title":"@DecryptParam","slug":"decryptparam","link":"#decryptparam","children":[]}],"git":{"updatedTime":1732593959000,"contributors":[{"name":"XuYijie","email":"1119461672@qq.com","commits":4}]},"filePathRelative":"en/annotation.md"}');export{h as comp,p as data};