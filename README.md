>  [!IMPORTANT]
> **This Project is currently work in progress and not finished *yet*!**  
> [Link to old project (still works fine)](https://github.com/JavaScriptPlayground/cloudflare-worker-fritzbox-dyndns). I am currently rewriting this project from vanilla JS to TS. I also want to improve the documentation and functionality.

# Fritz!Box DynDNS Cloudflare Worker

<a href="https://workers.cloudflare.com/">
<picture>
<source width="280px" align="right" media="(prefers-color-scheme: light)" srcset="https://gist.githubusercontent.com/Mqxx/1a3f1feb6b55f6ce193dd9e7e66efcaf/raw/c9faf3d4f4d5f00c9fb08a5007a3309aeffe5c8b/cloudflare_worker_badge_light.svg">
<img width="280px" align="right" src="https://gist.githubusercontent.com/Mqxx/1a3f1feb6b55f6ce193dd9e7e66efcaf/raw/c9faf3d4f4d5f00c9fb08a5007a3309aeffe5c8b/cloudflare_worker_badge_dark.svg">
</picture>
</a>

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

## Usage
Open your router interface (ex. http://fritz.box) and follow the instructions on ["Setting up dynamic DNS"](https://en.fritz.com/service/knowledge-base/dok/FRITZ-Box-7590/30_Setting-up-dynamic-DNS-in-the-FRITZ-Box/#:~:text=2%20Setting%20up%20dynamic%20DNS).

> If you are using a different router follow their instructions on how to setup the DynDNS.

### Update URL
Parts of the update URL:
```
https://worker.username.cloudflare.dev/?token=xyz123&zoneId=abc123&record={"type":"A","content":"000.000.000.000","name":"example.com","proxied":false,"comment":"Updated by Fritz!Box DynDNS","ttl":100}
        ├────┘ ├──────┘ ├─────────────┘ ├──────────┘ ├───────────┘ ├────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
        │      │        │               │            │             └ The record to create/update (JSON format)
        │      │        │               │            └ The zone ID of your domain
        │      │        │               └ The API token
        │      │        └ The Cloudflare base URL
        │      └ Your Cloudflare username
        └ Your worker instance name
```

### Placeholders
Furthermore, there are a few [placeholders](https://en.fritz.com/service/knowledge-base/dok/FRITZ-Box-7590/30_Setting-up-dynamic-DNS-in-the-FRITZ-Box/#:~:text=in%20the%20table%3A-,Entry,-Placeholder%20in%20the) which are automatically replaced by the Fritz!Box:

|      Parameter       | Description                       |
|:--------------------:|:----------------------------------|
|     `<username>`     | Username                          |
| `<pass>`/`<passwd>`  | Password (Token)                  |
|      `<domain>`      | Domain                            |
|      `<ipaddr>`      | New IPv4 address of the Fritz!Box |
|     `<ip6addr>`      | New IPv6 address of the Fritz!Box |
|   `<ip6lanprefix>`   | IPv6 prefix for home network      |
|    `<dualstack>`     | Dual-stack                        |
| `<b64>` ... `</b64>` | Base64 encoded Data               |

More information can be found in [this knowledge base from AVM on the topic "2 Setting up dynamic DNS"](https://en.avm.de/service/knowledge-base/dok/FRITZ-Box-7590/30_Setting-up-dynamic-DNS-in-the-FRITZ-Box/).

## Worker File
The build `worker.js` file can be found inside of the [`worker/`](./worker) directory.

### Record Properties
The following properties can be specified for each record to create/update.

[record-comments]: https://developers.cloudflare.com/dns/manage-dns-records/reference/record-attributes/#record-comments
[proxied-dns-records]: https://developers.cloudflare.com/dns/manage-dns-records/reference/proxied-dns-records
[ttl]: https://developers.cloudflare.com/dns/manage-dns-records/reference/ttl/

| Parameter | Valid Value                                   | Description                                                                                                                                                 |
|:---------:|:----------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  `type`   | `A`/`AAAA`/`CNAME`                            | Type of the record.                                                                                                                                         |
| `content` | *string*                                      | String value representing the content for the record.<br>Ex. IP for `A` record: `XXX.XXX.XXX.XXX`                                                           |
|  `name`   | *string*                                      | Your domain.<br>Ex. `example.com`                                                                                                                           |
| `proxied` | `true`/`false`                                | If the record should be proxied by Cloudflare.<br>You can find more information in the [Cloudflare documantation about "Proxy status"][proxied-dns-records] |
| `comment` | *string [(character limit)][record-comments]* | A comment for this record.                                                                                                                                  |
|   `ttl`   | *number*/`auto`                               | [Time to live (TTL)][ttl].                                                                                                                                  |

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
