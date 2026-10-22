export async function onRequestGet() {
  try {
    const res = await fetch('https://open.er-api.com/v6/latest/USD', {
      headers: { 'User-Agent': 'ETF-Studio/1.0' }
    });
    if (!res.ok) throw Error('upstream ' + res.status);
    const data = await res.json();
    const rate = data.rates?.KRW;
    if (!rate) throw Error('KRW rate not found');
    return Response.json({
      rate,
      time: data.time_last_update_utc,
      source: 'Open Exchange Rates'
    }, { headers: { 'Cache-Control': 'public,max-age=1800' } });
  } catch (e) {
    return Response.json({ error: 'FX data unavailable', detail: String(e.message) }, { status: 502 });
  }
}
