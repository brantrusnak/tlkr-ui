import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private $baseUrl = 'http://localhost';
  private $apiUrl = `${this.$baseUrl}:5000`;

  public readonly login = `${this.$apiUrl}/login`;
  public readonly logout = `${this.$apiUrl}/logout`;
  public readonly register = `${this.$apiUrl}/register`;

  constructor() { }

}
