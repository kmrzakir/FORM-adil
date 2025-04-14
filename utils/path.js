import path from 'path';
import { fileURLToPath } from 'url';

const rooPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..'); // Adjusted to point to the project root
export default rooPath;