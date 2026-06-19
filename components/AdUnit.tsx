// push は共有ローダー（_shared/adsense.js）が幅確定後に行う。ここでは枠のみ置く。
export function AdUnit() {
  return (
    <div style={{ textAlign: "center", margin: "2em auto", maxWidth: "728px", minHeight: "90px" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4871781946658288"
        data-ad-slot="7493033745"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
