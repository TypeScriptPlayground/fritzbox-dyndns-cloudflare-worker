/// <reference lib="deno.ns" />
import * as esbuild from 'https://deno.land/x/esbuild@v0.19.12/mod.js';
import { green } from 'https://deno.land/std@0.211.0/fmt/colors.ts';
import { parseArgs } from 'https://deno.land/std@0.211.0/cli/parse_args.ts';

const args = parseArgs<{
  watch: boolean | undefined,
  develop: boolean | undefined,
  logLevel: esbuild.LogLevel
}>(Deno.args);

const filesConfig : esbuild.BuildOptions = {
  allowOverwrite: true,
  logLevel: args.logLevel ?? 'info',
  legalComments: args.develop ? 'inline' : 'none',
  color: true,
  minify: args.develop === true ? false : true,
  bundle: true,
  format: 'esm',
  target: 'es2022',
  sourcemap: args.develop ?? false,
  sourcesContent: args.develop ?? false,
  outfile: 'worker/worker.js',
  entryPoints: [
    './src/worker.ts'
  ],
}

console.log('Build process started.');

const timestampNow = Date.now();

if (args.watch) {
  esbuild.context(filesConfig).then((context) => context.watch());
} else {
  esbuild.build(filesConfig).then(() => {
    esbuild.stop();
    console.log(green(`esbuild ${esbuild.version} finished build in ${(Date.now() - timestampNow).toString()}ms.`));
  })
}
