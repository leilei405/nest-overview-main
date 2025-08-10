/** 环境变量文件路径 */
export const envFilePath = [
  `.env.${process.env.NODE_ENV ?? 'development'}`,
  '.env',
];

/** 启动端口号 */
export const PORT = process.env.PORT ?? 3001;
