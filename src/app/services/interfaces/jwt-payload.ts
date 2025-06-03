export interface JwtPayloadInterface {
    ci: number;
    email: string;
    roles: string[];
    iat?: number;
    exp: number;
}