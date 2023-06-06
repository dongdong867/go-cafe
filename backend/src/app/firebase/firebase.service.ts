import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService {
  private firebase: admin.app.App;

  constructor() {
    const serviceAccount: admin.ServiceAccount = require('../../../cert.json');

    this.firebase = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  firestore() {
    return this.firebase.firestore();
  }
}
