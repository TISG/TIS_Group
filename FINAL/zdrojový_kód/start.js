#!/usr/bin/env node

if(!process.argv[2]) {
  console.log('Prosim specifikujte priecinok ku serveru')
  process.exit();
}

require('./server');
