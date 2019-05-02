export default function(): string[] {
  switch(process.env.NODE_ENV) {
    case 'staging': {
      console.error('Environment not configured to receive requests from anywhere.');
      return [
        // TODO:
      ]
    }
    case 'production': {
      console.error('Environment not configured to receive requests from anywhere.');
      return [
        // TODO:
      ]
    }
    default: return [ // development env
      'http://localhost:3001',
    ]
  }
}