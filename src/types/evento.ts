export type EventoAttributes = {
  Titolo: string;
  slug: string;
  DataEvento: string | null;
  DataFine?: string | null;
  Location?: string | null;
  MainImage?: {
    data?: {
      attributes?: {
        fullUrl: string;
      };
    };
  };
  ContenutoEvento?: any[]; // se vuoi possiamo tipizzare anche questo
  SidebarQuickInfo?: any[];
  SidebarInformazioni?: any[];
  SidebarRassegnaStampa?: any[];
};

export type EventoItem = {
  id: number;
  attributes: EventoAttributes;
};