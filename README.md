[Link to old project (still works fine)](https://github.com/JavaScriptPlayground/cloudflare-worker-fritzbox-dyndns). I am currently rewriting this project from vanilla JS to TS. I also want to improve the documentation and functionality.

# Fritz!Box DynDNS Cloudflare Worker
Update your Cloudflare DNS records from your Fritz!Box.

[![Run Unit Tests](https://github.com/TypeScriptPlayground/fritzbox-dyndns-cloudflare/actions/workflows/test.yml/badge.svg)](https://github.com/TypeScriptPlayground/fritzbox-dyndns-cloudflare/actions/workflows/test.yml)
[![Run Linter](https://github.com/TypeScriptPlayground/fritzbox-dyndns-cloudflare/actions/workflows/lint.yml/badge.svg)](https://github.com/TypeScriptPlayground/fritzbox-dyndns-cloudflare/actions/workflows/lint.yml)
[![Check Transpiled JavaScript](https://github.com/TypeScriptPlayground/fritzbox-dyndns-cloudflare/actions/workflows/check_dist.yml/badge.svg)](https://github.com/TypeScriptPlayground/fritzbox-dyndns-cloudflare/actions/workflows/check_dist.yml)

## Why does this project exist?
Many ISPs often only offer a dynamic IP for the home connection or charge a lot of money for a static IP address. In most cases, a static IP is not required, but if you want to offer a service from your own home via your home connection, there is often no way around a static IP. However, there is an alternative to a static IP, and that is [DynDNS](https://en.wikipedia.org/wiki/Dynamic_DNS). Using a DynDNS you can automatically update a name server in the Domain Name System (DNS). This means that if the IP of your home connection changes, the router can notify the name server of this change.

This project was developed especially for the [Fritz!Box by AVM](https://en.avm.de/products/fritzbox/), but the worker can also be used for other routers that support DynDNS.

## Worker File
The build `worker.js` file can be found inside of the [`worker/`](./worker) directory.

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
