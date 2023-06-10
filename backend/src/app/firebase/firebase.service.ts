import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { ConfigService } from '@nestjs/config';
import { getApp, getApps } from 'firebase-admin/app';

@Injectable()
export class FirebaseService {
  private firebase: admin.app.App;

  constructor() {
    const configService = new ConfigService();
    !getApps().length
      ? admin.initializeApp({
          credential: admin.credential.cert(
            JSON.parse(
              configService.get<string>('CERT'),
            ) as admin.ServiceAccount,
          ),
        })
      : getApp();
  }

  firestore() {
    return this.firebase.firestore();
  }
}
