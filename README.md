# Fritz!Box DynDNS Cloudflare
Update your Cloudflare DNS records from your Fritz!Box.

[![Run Unit Tests](https://github.com/TypeScriptPlayground/fritzbox-dyndns-cloudflare/actions/workflows/test.yml/badge.svg)](https://github.com/TypeScriptPlayground/fritzbox-dyndns-cloudflare/actions/workflows/test.yml)
[![Run Linter](https://github.com/TypeScriptPlayground/fritzbox-dyndns-cloudflare/actions/workflows/lint.yml/badge.svg)](https://github.com/TypeScriptPlayground/fritzbox-dyndns-cloudflare/actions/workflows/lint.yml)
[![Check Transpiled JavaScript](https://github.com/TypeScriptPlayground/fritzbox-dyndns-cloudflare/actions/workflows/check_dist.yml/badge.svg)](https://github.com/TypeScriptPlayground/fritzbox-dyndns-cloudflare/actions/workflows/check_dist.yml)

[Link to old project, that still works fine](https://github.com/JavaScriptPlayground/cloudflare-worker-fritzbox-dyndns)

```
- Record<Type>
  - type : Type
  - content : string
  - name : string
  - proxied : boolean
  - comment : string
  - ttl : number
```

```json
{
  "type": "A",
  "content": "000.000.000.000",
  "name": "example.com",
  "proxied": false,
  "comment": "Updated by Fritz!Box DynDNS",
  "ttl": 100
}
```

```
https://worker.username.cloudflare.dev/?token=xyz123&zoneId=abc123&record={"type":"A","content":"000.000.000.000","name":"example.com","proxied":false,"comment":"Updated by Fritz!Box DynDNS","ttl":100}
```
