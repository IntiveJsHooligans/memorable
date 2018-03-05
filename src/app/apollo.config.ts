import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '@env/environment';

// Apollo
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { getOperationAST } from 'graphql';

@NgModule({
  exports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ]
})
export class GraphQLModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    const http = httpLink.create({ uri: environment.graphCoolUri });

    apollo.create({
      link: http,
      cache: new InMemoryCache()
    });
  }
}
