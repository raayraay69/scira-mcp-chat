export interface ModeServer {
  name: string;
  url: string;
  type: 'sse' | 'stdio';
  command?: string;
  args?: string[];
  env?: { key: string; value: string }[];
  headers?: { key: string; value: string }[];
  description?: string;
}

export interface Mode {
  id: string;
  name: string;
  defaultServers: ModeServer[];
}

export const MODES: Mode[] = [
  {
    id: 'default',
    name: 'Default',
    defaultServers: []
  },
  {
    id: 'work',
    name: 'Work',
    defaultServers: [
      {
        name: 'Google Drive MCP',
        url: 'https://mcp.example.com/google-drive/sse',
        type: 'sse',
        description: 'Access Google Drive tools'
      },
      {
        name: 'Gmail MCP',
        url: 'https://mcp.example.com/gmail/sse',
        type: 'sse',
        description: 'Access Gmail tools'
      }
    ]
  },
  {
    id: 'research',
    name: 'Research',
    defaultServers: [
      {
        name: 'Research MCP',
        url: 'https://mcp.example.com/research/sse',
        type: 'sse',
        description: 'Research utilities'
      }
    ]
  }
];
