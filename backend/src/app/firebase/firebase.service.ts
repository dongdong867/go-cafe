import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FirebaseService {
  private firebase: admin.app.App;

  constructor() {
    const configService = new ConfigService();
    this.firebase =
      admin.apps.length === 0
        ? admin.initializeApp({
            credential: admin.credential.cert(
              JSON.parse(
                configService.get<string>('CERT'),
              ) as admin.ServiceAccount,
            ),
          })
        : admin.app();
  }

  firestore() {
    return this.firebase.firestore();
  }
}
