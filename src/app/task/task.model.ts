export interface NewTask {
  title: string;
  description: string;
  // done servira pour la checkbox de tache completee ou non
  done?: boolean;
}