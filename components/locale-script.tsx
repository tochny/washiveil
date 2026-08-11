/**
 * Pre-paint locale redirect — mirrors the ThemeScript pattern.
 *
 * Stored (localStorage 'locale') is authoritative: if it differs from the
 * current path's locale, redirect unconditionally.
 *
 * If nothing stored: detect from navigator.language(s), but only redirect
 * when the visitor is on the root '/' — never yank them off a deep link.
 * Detection does NOT persist: auto stays auto until the user manually
 * picks a locale via the LangSwitcher.
 */
export function LocaleScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html:
          'try{' +
          'var p=location.pathname;' +
          'var cur=p.indexOf("/zh-tw")===0?"zh-tw":p.indexOf("/ja")===0?"ja":"en";' +
          'var paths={"en":"/","zh-tw":"/zh-tw/","ja":"/ja/"};' +
          'var s;try{s=localStorage.getItem("locale")}catch(e){}' +
          'if(s==="zh-tw"||s==="ja"||s==="en"){' +
          'if(s!==cur)location.replace(paths[s])' +
          '}else if(p==="/"){' +
          'var langs=navigator.languages||[navigator.language||""];' +
          'var det="en";' +
          'for(var i=0;i<langs.length;i++){' +
          'var l=langs[i].toLowerCase();' +
          'if(l.indexOf("zh")===0){det="zh-tw";break}' +
          'if(l.indexOf("ja")===0){det="ja";break}' +
          '}' +
          'if(det!=="en")location.replace(paths[det])' +
          '}' +
          '}catch(e){}',
      }}
    />
  );
}
