import health from './api/health.js';
import contextBuild from './api/context/build.js';
import briefGenerate from './api/brief/generate.js';

function res(label) {
  return {
    headers: {},
    statusCode: 200,
    body: null,
    setHeader(k, v) { this.headers[k] = v; },
    status(code) { this.statusCode = code; return this; },
    json(obj) { this.body = obj; console.log(label, this.statusCode, JSON.stringify(obj).slice(0, 180)); return this; },
    end() { console.log(label, this.statusCode, 'end'); return this; }
  };
}

const intake = {
  client_name: 'Acme Renewables',
  company_name: 'Acme Renewables SAOC',
  industry: 'Renewable Energy',
  department: 'Business Development',
  domain: 'Utility-scale Solar Expansion',
  region: 'OM',
  scope_of_work: 'Help us expand into utility-scale solar and align with national investment priorities.',
  documents: [],
  urls: ['https://example.com'],
  emails: []
};

await health({ method: 'GET', headers: {} }, res('health'));
await contextBuild({ method: 'POST', headers: {}, body: { intake } }, res('context'));
await briefGenerate({ method: 'POST', headers: {}, body: { intake, variable_bank: {}, confirmation_answers: { q_decider: ['CEO'] } } }, res('brief'));
