import{_ as e,c as a,o as i,a as l}from"./app-BxG_fo_4.js";const t={},n=l('<h1 id="version-history" tabindex="-1"><a class="header-anchor" href="#version-history"><span>Version History</span></a></h1><blockquote><p>The current 2.x (spring boot 2) and 3.x (spring boot 3) versions will be sync up and updated, with the same functions. Maybe 2.x will be stopped later, after all, it will be 2024.</p></blockquote><h2 id="_3-1-5" tabindex="-1"><a class="header-anchor" href="#_3-1-5"><span>😃 3.1.5</span></a></h2><p>feature：</p><ul><li>Increase the ignore and decrypt annotations</li></ul><p>fix：</p><ul><li>We fixed the problem of URL matching failure caused by asynchronous scheduling, and URL matching now works for entity class fields in the form of a form</li></ul><h2 id="_2-2-2" tabindex="-1"><a class="header-anchor" href="#_2-2-2"><span>😃 2.2.2</span></a></h2><p>feature：</p><ul><li>Increase the ignore and decrypt annotations</li></ul><p>fix：</p><ul><li>We fixed the problem of URL matching failure caused by asynchronous scheduling, and URL matching now works for entity class fields in the form of a form</li></ul><h2 id="_3-1-4" tabindex="-1"><a class="header-anchor" href="#_3-1-4"><span>😃 3.1.4</span></a></h2><p>feature：</p><ul><li>We will no longer check if the parameters in the request header are empty. If they are, we will directly throw an exception indicating a validation failure</li><li>Add an X-signature in the example</li><li>Adjust the granularity of ObjectMapper configuration, and try not to override the original default configuration as much as much as possible</li><li>When processing front-end requestBody, it is defaulted to handle it according to the UTF8 character set</li></ul><p>fix：</p><ul><li>Fix the error when the parameter analyzer parses the JSON of a map</li></ul><h2 id="_2-2-1" tabindex="-1"><a class="header-anchor" href="#_2-2-1"><span>😃 2.2.1</span></a></h2><p>feature：</p><ul><li>We will no longer check if the parameters in the request header are empty. If they are, we will directly throw an exception indicating a validation failure</li><li>Add an X-signature in the example</li><li>Adjust the granularity of ObjectMapper configuration, and try not to override the original default configuration as much as much as possible</li><li>When processing front-end requestBody, it is defaulted to handle it according to the UTF8 character set</li></ul><p>fix：</p><ul><li>Fix the error when the parameter analyzer parses the JSON of a map</li></ul><h2 id="_3-1-3" tabindex="-1"><a class="header-anchor" href="#_3-1-3"><span>😃 3.1.3</span></a></h2><p>feature：</p><ul><li>Support interface data digital signature verification</li></ul><h2 id="_2-2-0" tabindex="-1"><a class="header-anchor" href="#_2-2-0"><span>😃 2.2.0</span></a></h2><p>feature：</p><ul><li>Support interface data digital signature verification</li></ul><h2 id="_3-1-2" tabindex="-1"><a class="header-anchor" href="#_3-1-2"><span>😃 3.1.2</span></a></h2><p>feature：</p><ul><li>Better deserialization of List strings</li><li>Param parameter decryption uses asynchronous orchestration to improve performance</li><li>Add test HTTP file</li><li>Upgrade spring boot to 3.3.6</li></ul><p>fix：</p><ul><li>Handle parameter decryption of immutable array types such as String [], Long []</li></ul><h2 id="_2-1-9" tabindex="-1"><a class="header-anchor" href="#_2-1-9"><span>😃 2.1.9</span></a></h2><p>feature：</p><ul><li>Better deserialization of List strings</li><li>Param parameter decryption uses asynchronous orchestration to improve performance</li><li>Add test HTTP file</li></ul><p>fix：</p><ul><li>Handle parameter decryption of immutable array types such as String [], Long []</li></ul><h2 id="_3-1-1" tabindex="-1"><a class="header-anchor" href="#_3-1-1"><span>😃 3.1.1</span></a></h2><p>fix：</p><ul><li>Quotation Processing of JSON String Decryption</li></ul><h2 id="_2-1-8" tabindex="-1"><a class="header-anchor" href="#_2-1-8"><span>😃 2.1.8</span></a></h2><p>fix：</p><ul><li>Quotation Processing of JSON String Decryption</li></ul><h2 id="_3-1-0" tabindex="-1"><a class="header-anchor" href="#_3-1-0"><span>😃 3.1.0</span></a></h2><p>fix：</p><ul><li>Space loss after date array parameter is deciphered</li></ul><h2 id="_2-1-7" tabindex="-1"><a class="header-anchor" href="#_2-1-7"><span>😃 2.1.7</span></a></h2><p>fix：</p><ul><li>Space loss after date array parameter is deciphered</li></ul><h2 id="_3-0-9" tabindex="-1"><a class="header-anchor" href="#_3-0-9"><span>😃 3.0.9</span></a></h2><p>fix：</p><ul><li>Date formatting problem, add various types of date formatting configuration</li></ul><h2 id="_2-1-6" tabindex="-1"><a class="header-anchor" href="#_2-1-6"><span>😃 2.1.6</span></a></h2><p>fix：</p><ul><li>Date formatting problem, add various types of date formatting configuration</li></ul><h2 id="_3-0-8" tabindex="-1"><a class="header-anchor" href="#_3-0-8"><span>😃 3.0.8</span></a></h2><p>fix：</p><ul><li>The plaintext is too long when RSA is encrypted, and the encryption fails</li></ul><h2 id="_2-1-5" tabindex="-1"><a class="header-anchor" href="#_2-1-5"><span>😃 2.1.5</span></a></h2><p>fix：</p><ul><li>The plaintext is too long when RSA is encrypted, and the encryption fails</li></ul><h2 id="_3-0-7" tabindex="-1"><a class="header-anchor" href="#_3-0-7"><span>😃 3.0.7</span></a></h2><p>fix：</p><ul><li>The Missing Field Value of Entity Class Parameters in Param Form</li></ul><h2 id="_2-1-4" tabindex="-1"><a class="header-anchor" href="#_2-1-4"><span>😃 2.1.4</span></a></h2><p>fix：</p><ul><li>The Missing Field Value of Entity Class Parameters in Param Form</li></ul><h2 id="_3-0-6" tabindex="-1"><a class="header-anchor" href="#_3-0-6"><span>😃 3.0.6</span></a></h2><p>feature：</p><ul><li>Support SM4 encryption algorithm</li></ul><p>modify：</p><ul><li>The default value of the enabled configuration item for the component is changed to false</li></ul><h2 id="_2-1-3" tabindex="-1"><a class="header-anchor" href="#_2-1-3"><span>😃 2.1.3</span></a></h2><p>feature：</p><ul><li>Support SM4 encryption algorithm</li></ul><p>modify：</p><ul><li>The default value of the enabled configuration item for the component is changed to false</li></ul><h2 id="_3-0-5" tabindex="-1"><a class="header-anchor" href="#_3-0-5"><span>😃 3.0.5</span></a></h2><p>feature：</p><ul><li>From this version onwards, if the encryption function is turned off in the configuration file, the @DecryptParam annotation also loses the parameter processing function, which means that adding this annotation is the same as not adding it</li><li>Add param/formData parameter to decipher log printing</li></ul><p>fix：</p><ul><li>The entity class receives the param/formData parameter for decipher. When the final field or basic type is passed with a field value of null, the field value of the entity class is empty</li></ul><h2 id="_2-1-2" tabindex="-1"><a class="header-anchor" href="#_2-1-2"><span>😃 2.1.2</span></a></h2><p>feature：</p><ul><li>From this version onwards, if the encryption function is turned off in the configuration file, the @DecryptParam annotation also loses the parameter processing function, which means that adding this annotation is the same as not adding it</li><li>Add param/formData parameter to decipher log printing</li></ul><p>fix：</p><ul><li>The entity class receives the param/formData parameter for decipher. When the final field or basic type is passed with a field value of null, the field value of the entity class is empty</li></ul><h2 id="_3-0-4" tabindex="-1"><a class="header-anchor" href="#_3-0-4"><span>😃 3.0.4</span></a></h2><p>fix：</p><ul><li>Fix the issue that the encryption algorithm and session key algorithm enumeration class configuration in the yml configuration file do not take effect</li></ul><h2 id="_2-1-1" tabindex="-1"><a class="header-anchor" href="#_2-1-1"><span>😃 2.1.1</span></a></h2><p>fix：</p><ul><li>Fix the issue that the encryption algorithm and session key algorithm enumeration class configuration in the yml configuration file do not take effect</li></ul><h2 id="_3-0-3" tabindex="-1"><a class="header-anchor" href="#_3-0-3"><span>😃 3.0.3</span></a></h2><p>fix：</p><ul><li>@DecryptParam annotation parsed List is immutable array caused by add and other method exceptions</li></ul><h2 id="_2-1-0" tabindex="-1"><a class="header-anchor" href="#_2-1-0"><span>😃 2.1.0</span></a></h2><p>fix：</p><ul><li>@DecryptParam annotation parsed List is immutable array caused by add and other method exceptions</li></ul><h2 id="_2-0-9" tabindex="-1"><a class="header-anchor" href="#_2-0-9"><span>😃 2.0.9</span></a></h2><p>fix：</p><ul><li>Compatibility issues with spring boot version 2.7 and below</li></ul><h2 id="_3-0-2" tabindex="-1"><a class="header-anchor" href="#_3-0-2"><span>😃 3.0.2</span></a></h2><p>feature:</p><ul><li>Add the configuration item: url-safe to determine whether the generated key and ciphertext comply with the url specification, so that you can transfer it in the url address</li></ul><h2 id="_2-0-8" tabindex="-1"><a class="header-anchor" href="#_2-0-8"><span>😃 2.0.8</span></a></h2><p>feature:</p><ul><li>Add the configuration item: url-safe to determine whether the generated key and ciphertext comply with the url specification, so that you can transfer it in the url address</li></ul><h2 id="_3-0-1" tabindex="-1"><a class="header-anchor" href="#_3-0-1"><span>😃 3.0.1</span></a></h2><p>feature:</p><ul><li>The session key supports all symmetric algorithms</li></ul><h2 id="_2-0-7" tabindex="-1"><a class="header-anchor" href="#_2-0-7"><span>😃 2.0.7</span></a></h2><p>feature:</p><ul><li>The session key supports all symmetric algorithms</li></ul><h2 id="_3-0-0" tabindex="-1"><a class="header-anchor" href="#_3-0-0"><span>😃 3.0.0</span></a></h2><p>Support stable versions of spring boot 3 and above!!!</p><h2 id="_2-0-6" tabindex="-1"><a class="header-anchor" href="#_2-0-6"><span>😃 2.0.6</span></a></h2><p>The first stable version with no problems with each function!!! Support spring boot 2</p><h2 id="❌-2-0-5-deprecated" tabindex="-1"><a class="header-anchor" href="#❌-2-0-5-deprecated"><span>❌ 2.0.5（Deprecated）</span></a></h2><p>Problem:</p><ul><li>The provided DH key agreement algorithm is not url safe</li></ul><h2 id="❌-2-0-4-deprecated" tabindex="-1"><a class="header-anchor" href="#❌-2-0-4-deprecated"><span>❌ 2.0.4（Deprecated）</span></a></h2><p>Problem:</p><ul><li>SecureApi enable set to false still deciphers param and form-data parameters</li><li>CipherUtils method name outdated</li></ul><h2 id="❌-2-0-3-deprecated" tabindex="-1"><a class="header-anchor" href="#❌-2-0-3-deprecated"><span>❌ 2.0.3（Deprecated）</span></a></h2><p>Problem:</p><ul><li>Param and form-data parameter decipher not fully supported</li><li>Complex type conversion problems after param and form-data parameters are deciphered</li></ul><h2 id="❌-2-0-2-deprecated" tabindex="-1"><a class="header-anchor" href="#❌-2-0-2-deprecated"><span>❌ 2.0.2（Deprecated）</span></a></h2><p>Problem:</p><ul><li>The download jar package is incomplete</li></ul><h2 id="❌-2-0-1-deprecated" tabindex="-1"><a class="header-anchor" href="#❌-2-0-1-deprecated"><span>❌ 2.0.1（Deprecated）</span></a></h2><p>Problem:</p><ul><li>Unable to download</li></ul><h2 id="❌-2-0-0-deprecated" tabindex="-1"><a class="header-anchor" href="#❌-2-0-0-deprecated"><span>❌ 2.0.0（Deprecated）</span></a></h2><p>Problem:</p><ul><li>Unable to download</li></ul>',137),r=[n];function s(h,d){return i(),a("div",null,r)}const p=e(t,[["render",s],["__file","version-history.html.vue"]]),c=JSON.parse('{"path":"/en/version-history.html","title":"Version History","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"😃 3.1.5","slug":"_3-1-5","link":"#_3-1-5","children":[]},{"level":2,"title":"😃 2.2.2","slug":"_2-2-2","link":"#_2-2-2","children":[]},{"level":2,"title":"😃 3.1.4","slug":"_3-1-4","link":"#_3-1-4","children":[]},{"level":2,"title":"😃 2.2.1","slug":"_2-2-1","link":"#_2-2-1","children":[]},{"level":2,"title":"😃 3.1.3","slug":"_3-1-3","link":"#_3-1-3","children":[]},{"level":2,"title":"😃 2.2.0","slug":"_2-2-0","link":"#_2-2-0","children":[]},{"level":2,"title":"😃 3.1.2","slug":"_3-1-2","link":"#_3-1-2","children":[]},{"level":2,"title":"😃 2.1.9","slug":"_2-1-9","link":"#_2-1-9","children":[]},{"level":2,"title":"😃 3.1.1","slug":"_3-1-1","link":"#_3-1-1","children":[]},{"level":2,"title":"😃 2.1.8","slug":"_2-1-8","link":"#_2-1-8","children":[]},{"level":2,"title":"😃 3.1.0","slug":"_3-1-0","link":"#_3-1-0","children":[]},{"level":2,"title":"😃 2.1.7","slug":"_2-1-7","link":"#_2-1-7","children":[]},{"level":2,"title":"😃 3.0.9","slug":"_3-0-9","link":"#_3-0-9","children":[]},{"level":2,"title":"😃 2.1.6","slug":"_2-1-6","link":"#_2-1-6","children":[]},{"level":2,"title":"😃 3.0.8","slug":"_3-0-8","link":"#_3-0-8","children":[]},{"level":2,"title":"😃 2.1.5","slug":"_2-1-5","link":"#_2-1-5","children":[]},{"level":2,"title":"😃 3.0.7","slug":"_3-0-7","link":"#_3-0-7","children":[]},{"level":2,"title":"😃 2.1.4","slug":"_2-1-4","link":"#_2-1-4","children":[]},{"level":2,"title":"😃 3.0.6","slug":"_3-0-6","link":"#_3-0-6","children":[]},{"level":2,"title":"😃 2.1.3","slug":"_2-1-3","link":"#_2-1-3","children":[]},{"level":2,"title":"😃 3.0.5","slug":"_3-0-5","link":"#_3-0-5","children":[]},{"level":2,"title":"😃 2.1.2","slug":"_2-1-2","link":"#_2-1-2","children":[]},{"level":2,"title":"😃 3.0.4","slug":"_3-0-4","link":"#_3-0-4","children":[]},{"level":2,"title":"😃 2.1.1","slug":"_2-1-1","link":"#_2-1-1","children":[]},{"level":2,"title":"😃 3.0.3","slug":"_3-0-3","link":"#_3-0-3","children":[]},{"level":2,"title":"😃 2.1.0","slug":"_2-1-0","link":"#_2-1-0","children":[]},{"level":2,"title":"😃 2.0.9","slug":"_2-0-9","link":"#_2-0-9","children":[]},{"level":2,"title":"😃 3.0.2","slug":"_3-0-2","link":"#_3-0-2","children":[]},{"level":2,"title":"😃 2.0.8","slug":"_2-0-8","link":"#_2-0-8","children":[]},{"level":2,"title":"😃 3.0.1","slug":"_3-0-1","link":"#_3-0-1","children":[]},{"level":2,"title":"😃 2.0.7","slug":"_2-0-7","link":"#_2-0-7","children":[]},{"level":2,"title":"😃 3.0.0","slug":"_3-0-0","link":"#_3-0-0","children":[]},{"level":2,"title":"😃 2.0.6","slug":"_2-0-6","link":"#_2-0-6","children":[]},{"level":2,"title":"❌ 2.0.5（Deprecated）","slug":"❌-2-0-5-deprecated","link":"#❌-2-0-5-deprecated","children":[]},{"level":2,"title":"❌ 2.0.4（Deprecated）","slug":"❌-2-0-4-deprecated","link":"#❌-2-0-4-deprecated","children":[]},{"level":2,"title":"❌ 2.0.3（Deprecated）","slug":"❌-2-0-3-deprecated","link":"#❌-2-0-3-deprecated","children":[]},{"level":2,"title":"❌ 2.0.2（Deprecated）","slug":"❌-2-0-2-deprecated","link":"#❌-2-0-2-deprecated","children":[]},{"level":2,"title":"❌ 2.0.1（Deprecated）","slug":"❌-2-0-1-deprecated","link":"#❌-2-0-1-deprecated","children":[]},{"level":2,"title":"❌ 2.0.0（Deprecated）","slug":"❌-2-0-0-deprecated","link":"#❌-2-0-0-deprecated","children":[]}],"git":{"updatedTime":1744278686000,"contributors":[{"name":"XuYijie","email":"1119461672@qq.com","commits":25}]},"filePathRelative":"en/version-history.md"}');export{p as comp,c as data};
