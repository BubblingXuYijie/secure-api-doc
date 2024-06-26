import{_ as n,c as s,o as a,a as e}from"./app-CBCdlrng.js";const t={},p=e(`<h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h1><blockquote><p>There are two configuration methods, <code>yml</code> and <code>Bean</code>, depending on which one you prefer. If it requires higher security, it is recommended to use the <code>Bean</code> method to dynamically set the key, rather than writing it in <code>yml</code>.</p></blockquote><h2 id="yml-mode" tabindex="-1"><a class="header-anchor" href="#yml-mode"><span>yml mode</span></a></h2><blockquote><p>The following is the complete configuration of <code>yml</code> , some of which are optional, as explained in the comments.</p></blockquote><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line"><span class="token key atrule">secure-api</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token comment"># Enable the SecureApi function, if false, the rest of the configuration items will not take effect</span></span>
<span class="line">  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">  <span class="token comment"># Turn on encryption and decryption log printing, and information such as interface name, encryption mode, algorithm, plaintext and ciphertext will be printed</span></span>
<span class="line">  <span class="token key atrule">show-log</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">  <span class="token comment"># Encryption mode, common and session_key optional, session_key is session key mode, used for each request to use a different key, requires front-end cooperation</span></span>
<span class="line">  <span class="token key atrule">mode</span><span class="token punctuation">:</span> common</span>
<span class="line">  <span class="token comment"># encryption algorithm</span></span>
<span class="line">  <span class="token key atrule">cipher-algorithm</span><span class="token punctuation">:</span> rsa_ecb_sha256</span>
<span class="line">  <span class="token comment"># session_key mode configuration item, the session key type negotiated with the front end, this configuration does not take effect in common mode</span></span>
<span class="line">  <span class="token key atrule">session-key-cipher-algorithm</span><span class="token punctuation">:</span> aes_ecb_pkcs5</span>
<span class="line">  <span class="token comment"># Symmetric algorithm is used to encrypt and decrypt the key. When the cipher-algorithm selects the symmetric encryption algorithm, it can also be empty, and the component will randomly generate one</span></span>
<span class="line">  <span class="token key atrule">key</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token comment"># The offset of the symmetric algorithm used for encryption and decryption. When the cipher-algorithm selects the symmetric encryption algorithm, it can also be empty, and the component will randomly generate one</span></span>
<span class="line">  <span class="token key atrule">iv</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token comment"># The asymmetric algorithm is used to encrypt the public key. When the cipher-algorithm selects the asymmetric encryption algorithm, it can also be empty. The component will randomly generate a pair</span></span>
<span class="line">  <span class="token key atrule">public-key</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token comment"># The asymmetric algorithm is used to encrypt the private key. When the cipher-algorithm selects the asymmetric encryption algorithm, it can also be empty. The component will randomly generate a pair</span></span>
<span class="line">  <span class="token key atrule">private-key</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token comment"># The interface path matching that needs to be encrypted follows the regular rules of the spring boot interceptor. If left blank or not configured, it means that url matching is not used, and only the annotated interface is decrypted</span></span>
<span class="line">  <span class="token key atrule">encrypt-url</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># If this item is configured, the return value will be encrypted with or without annotations on the interface</span></span>
<span class="line">    <span class="token key atrule">include-urls</span><span class="token punctuation">:</span> /<span class="token important">**</span></span>
<span class="line">    <span class="token comment"># Annotations take precedence over this even if exclusions are configured</span></span>
<span class="line">    <span class="token key atrule">exclude-urls</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token comment"># The interface path matching that needs to be decrypted follows the regular rules of the spring boot interceptor. Leaving blank or not configuring means that url matching is not used, and only the interfaces, parameters, and fields of the annotation are decrypted</span></span>
<span class="line">  <span class="token key atrule">decrypt-url</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># If this item is configured, the interface, parameters, and fields will be decrypted with or without annotations</span></span>
<span class="line">    <span class="token key atrule">include-urls</span><span class="token punctuation">:</span> /<span class="token important">**</span></span>
<span class="line">    <span class="token comment"># Annotations take precedence over this even if exclusions are configured</span></span>
<span class="line">    <span class="token key atrule">exclude-urls</span><span class="token punctuation">:</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bean-mode" tabindex="-1"><a class="header-anchor" href="#bean-mode"><span>Bean mode</span></a></h2><blockquote><p>Note that once the <code>Bean</code> method is used to configure, the configuration items in <code>yml</code> will be invalid.</p></blockquote><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">icu<span class="token punctuation">.</span>xuyijie<span class="token punctuation">.</span>secureapi<span class="token punctuation">.</span>cipher<span class="token punctuation">.</span></span><span class="token class-name">CipherAlgorithmEnum</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">icu<span class="token punctuation">.</span>xuyijie<span class="token punctuation">.</span>secureapi<span class="token punctuation">.</span>cipher<span class="token punctuation">.</span></span><span class="token class-name">CipherUtils</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">icu<span class="token punctuation">.</span>xuyijie<span class="token punctuation">.</span>secureapi<span class="token punctuation">.</span>cipher<span class="token punctuation">.</span></span><span class="token class-name">RsaKeyPair</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">icu<span class="token punctuation">.</span>xuyijie<span class="token punctuation">.</span>secureapi<span class="token punctuation">.</span>model<span class="token punctuation">.</span></span><span class="token class-name">SecureApiProperties</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">icu<span class="token punctuation">.</span>xuyijie<span class="token punctuation">.</span>secureapi<span class="token punctuation">.</span>model<span class="token punctuation">.</span></span><span class="token class-name">SecureApiPropertiesConfig</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringBootConfiguration</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token annotation punctuation">@SpringBootConfiguration</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SecureApiConfig</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * The bean configured here will cause the data of the yml configuration to be invalid</span>
<span class="line">     * <span class="token keyword">@return</span> SecureApiPropertiesConfig</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token annotation punctuation">@Bean</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">SecureApiPropertiesConfig</span> <span class="token function">secureApiPropertiesConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">SecureApiPropertiesConfig</span> secureApiPropertiesConfig <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SecureApiPropertiesConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        secureApiPropertiesConfig<span class="token punctuation">.</span><span class="token function">setEnabled</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        secureApiPropertiesConfig<span class="token punctuation">.</span><span class="token function">setShowLog</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        secureApiPropertiesConfig<span class="token punctuation">.</span><span class="token function">setMode</span><span class="token punctuation">(</span><span class="token class-name">SecureApiProperties<span class="token punctuation">.</span>Mode</span><span class="token punctuation">.</span><span class="token constant">COMMON</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        secureApiPropertiesConfig<span class="token punctuation">.</span><span class="token function">setCipherAlgorithmEnum</span><span class="token punctuation">(</span><span class="token class-name">CipherAlgorithmEnum</span><span class="token punctuation">.</span><span class="token constant">RSA_ECB_SHA256</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// The key can not be set, the component will automatically generate one and print it on the console. If you need to generate it manually, you only need to use the CipherUtils provided by the component</span></span>
<span class="line">        <span class="token class-name">CipherUtils</span> cipherUtils <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CipherUtils</span><span class="token punctuation">(</span><span class="token class-name">CipherAlgorithmEnum</span><span class="token punctuation">.</span><span class="token constant">RSA_ECB_SHA256</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// Because we chose non-symmetric encryption RSA, a key pair is generated, and getRandomRsaKeyPair (&quot;1&quot;) can be passed the seed parameter, which can be used to control the same key generated each time during testing</span></span>
<span class="line">        <span class="token class-name">RsaKeyPair</span> randomRsaKeyPair <span class="token operator">=</span> cipherUtils<span class="token punctuation">.</span><span class="token function">getRandomRsaKeyPair</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// Set the generated key pair to secureApiPropertiesConfig</span></span>
<span class="line">        secureApiPropertiesConfig<span class="token punctuation">.</span><span class="token function">setPublicKey</span><span class="token punctuation">(</span>randomRsaKeyPair<span class="token punctuation">.</span><span class="token function">getPublicKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        secureApiPropertiesConfig<span class="token punctuation">.</span><span class="token function">setPrivateKey</span><span class="token punctuation">(</span>randomRsaKeyPair<span class="token punctuation">.</span><span class="token function">getPrivateKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// You don&#39;t need to use the URL matching function to delete the following two lines, or pass in an empty array</span></span>
<span class="line">        <span class="token comment">// secureApiPropertiesConfig.setEncryptUrl(new SecureApiProperties.UrlPattern(Arrays.asList(&quot;/**&quot;), new ArrayList&lt;&gt;()));</span></span>
<span class="line">        <span class="token comment">// secureApiPropertiesConfig.setDecryptUrl(new SecureApiProperties.UrlPattern(Arrays.asList(&quot;/**&quot;), Arrays.asList(&quot;/secureApiTest/testForm&quot;)));</span></span>
<span class="line">        <span class="token keyword">return</span> secureApiPropertiesConfig<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),i=[p];function o(c,l){return a(),s("div",null,i)}const u=n(t,[["render",o],["__file","configuration.html.vue"]]),d=JSON.parse('{"path":"/en/configuration.html","title":"Configuration","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"yml mode","slug":"yml-mode","link":"#yml-mode","children":[]},{"level":2,"title":"Bean mode","slug":"bean-mode","link":"#bean-mode","children":[]}],"git":{"updatedTime":1719421325000,"contributors":[{"name":"XuYijie","email":"1119461672@qq.com","commits":1}]},"filePathRelative":"en/configuration.md"}');export{u as comp,d as data};
