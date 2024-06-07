[Link to old project (still works fine)](https://github.com/JavaScriptPlayground/cloudflare-worker-fritzbox-dyndns). I am currently rewriting this project from vanilla JS to TS. I also want to improve the documentation and functionality.

# Fritz!Box DynDNS Cloudflare Worker
Update your Cloudflare DNS records from your Fritz!Box.

[![Run Unit Tests](https://github.com/TypeScriptPlayground/fritzbox-dyndns-cloudflare/actions/workflows/test.yml/badge.svg)](https://github.com/TypeScriptPlayground/fritzbox-dyndns-cloudflare/actions/workflows/test.yml)
[![Run Linter](https://github.com/TypeScriptPlayground/fritzbox-dyndns-cloudflare/actions/workflows/lint.yml/badge.svg)](https://github.com/TypeScriptPlayground/fritzbox-dyndns-cloudflare/actions/workflows/lint.yml)
[![Check Transpiled JavaScript](https://github.com/TypeScriptPlayground/fritzbox-dyndns-cloudflare/actions/workflows/check_dist.yml/badge.svg)](https://github.com/TypeScriptPlayground/fritzbox-dyndns-cloudflare/actions/workflows/check_dist.yml)

## Why does this project exist?
Many ISPs often only offer a dynamic IP for the home connection or charge a lot of extra money for a static IP address. In most cases, a static IP is not required, but if you want to offer a service from your own home via your home connection, there is often no way around a static IP. However, there is an alternative to a static IP, and that is [DynDNS](https://en.wikipedia.org/wiki/Dynamic_DNS). Using a DynDNS you can automatically update a name server in the Domain Name System (DNS). This means that if the IP of your home connection changes, the router can notify the name server of this change.

AVM does already provide a [build-in DynDNS service for the Fritz!Box, called MyFritz](https://en.avm.de/service/knowledge-base/dok/FRITZ-Box-3490/1018_Determining-the-MyFRITZ-address-to-directly-access-FRITZ-Box-and-home-network-from-the-internet/), why not use the build-in service instead? I don't want all my traffic to be routed between multiple diffrent services. I already manage my domains on Cloudflare, so why use another service when I just can manage everthing on Cloudflare.

This project was developed especially for the [Fritz!Box by AVM](https://en.avm.de/products/fritzbox/), but the worker can also be used for other routers that support DynDNS.

## How does the update mechanism work?
If the IP is changed by the ISP, the Fritz!Box sends a GET request to the DynDNS URL. The Fritz!Box offers [various placeholders](https://en.avm.de/service/knowledge-base/dok/FRITZ-Box-7590/30_Setting-up-dynamic-DNS-in-the-FRITZ-Box/) for the URL which are automatically filled in by the Fritz!Box before sending.

The worker which is behind the URL is executed by the GET request of the Fritz!Box and changes the IP which was given via the URL parameters using the Cloudflare API.

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
