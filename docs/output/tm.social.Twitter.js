Ext.data.JsonP.tm_social_Twitter({"tagname":"class","name":"tm.social.Twitter","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"code_type":"assignment","inheritable":false,"inheritdoc":null,"meta":{},"id":"class-tm.social.Twitter","members":{"cfg":[],"property":[],"method":[{"name":"createURL","tagname":"method","owner":"tm.social.Twitter","meta":{},"id":"method-createURL"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"files":[{"filename":"twitter.js","href":"twitter.html#tm-social-Twitter"}],"html_meta":{},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/twitter.html#tm-social-Twitter' target='_blank'>twitter.js</a></div></pre><div class='doc-contents'><p>ツイッター関連ネームスペース</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-createURL' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.social.Twitter'>tm.social.Twitter</span><br/><a href='source/twitter.html#tm-social-Twitter-method-createURL' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.social.Twitter-method-createURL' class='name expandable'>createURL</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> prop</span> )</div><div class='description'><div class='short'>Tweet する ...</div><div class='long'><p>Tweet する</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>prop</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><h3>Reference</h3>\n\n<ul>\n<li><a href=\"https://dev.twitter.com/docs/intents\">https://dev.twitter.com/docs/intents</a>\n\n<h3>Example</h3>\n\n   tm.social.Twitter.createURL({\n\n<pre><code>   type        : \"tweet\",              // タイプ(tweet/retweet/favorite/user)\n   tweet_id    : \"210219483959263232\", // 対象となる Tweet\n   in_reply_to : \"210219483959263232\", // 返信する対象となる Tweet\n   text        : \"Test\",               // テキスト\n   screen_name : \"phi_jp\",             // スクリーンネーム\n   hashtags    : \"javascript,tmlibjs\", // ハッシュタグ\n   url         : \"http://tmlife.net\",  // url\n   via         : \"phi_jp\",             // ～から\n   related     : \"tmlib.js tmlife\",    // 関連ワード\n</code></pre>\n\n<p>   });</p></li>\n</ul>\n\n</div></li></ul></div></div></div></div></div></div></div>"});