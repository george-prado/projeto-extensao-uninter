import { TestBed } from '@angular/core/testing';

import { QrcodePaymentServiceService } from './qrcode.payment.service';

describe('QrcodePaymentServiceService', () => {
  let service: QrcodePaymentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QrcodePaymentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
