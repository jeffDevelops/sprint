export default function(): string {
  switch(window.location.host) {
    case 'localhost:3001': return 'http://localhost:3000';
    // TODO: Staging
    // TODO: Production
    default: throw new Error('App running in unknown environment: configure in src/http/determineAPIHost');
  }
}