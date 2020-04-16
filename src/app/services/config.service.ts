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
  public readonly user = `${this.$apiUrl}/user`;
  public readonly post = `${this.$apiUrl}/post`;
  public readonly timeline = `${this.$apiUrl}/timeline`;
  public readonly favorite = `${this.$apiUrl}/favorite`;
  public readonly unfavorite = `${this.$apiUrl}/unfavorite`;

  constructor() { }

}
