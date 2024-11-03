/**
 * 環境変数を取得するサービス
 */
export class GetEnvService {
    /**
     * バックエンドAPIのURLを取得する
     * @returns バックエンドAPIのURL
     */
    public static getBaseApiUrl(): string {
        return import.meta.env.VITE_BASE_API_URL;
    }
}
