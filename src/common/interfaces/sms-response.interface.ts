export declare type SmsCommonErroCode =
  | 'AuthFailure.InvalidSecretIdx'
  | 'AuthFailure.MFAFailure'
  | 'AuthFailure.SecretIdNotFound'
  | 'AuthFailure.SignatureExpire'
  | 'AuthFailure.SignatureFailure'
  | 'AuthFailure.TokenFailure'
  | 'AuthFailure.UnauthorizedOperation'
  | 'DryRunOperation'
  | 'FailedOperation'
  | 'InternalError'
  | 'InvalidAction'
  | 'InvalidParameter'
  | 'InvalidParameterValue'
  | 'LimitExceeded'
  | 'MissingParameter'
  | 'NoSuchVersion'
  | 'RequestLimitExceeded'
  | 'ResourceInUse'
  | 'ResourceInsufficient'
  | 'ResourceNotFound'
  | 'ResourceUnavailable'
  | 'UnauthorizedOperation'
  | 'UnknownParameter'
  | 'UnsupportedOperation'
  | 'UnsupportedProtocol'
  | 'UnsupportedRegion';

export interface SmsResponseSuccess {
  TotalCount: string;
  InstanceStatusSet: string[];
  RequestId: string;
}

export interface SmsResponseError {
  Error: {
    Code: SmsCommonErroCode;
    Message: string;
  };
  RequestId: string;
}
