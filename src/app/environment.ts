export const environment = {
  host: 'localhost',
  port: '8080',
  get apiUrl() {
    return `http://${this.host}:${this.port}`;
  }
};
