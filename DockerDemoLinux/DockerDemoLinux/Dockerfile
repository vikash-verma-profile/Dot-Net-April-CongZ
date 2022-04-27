#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["DockerDemoLinux/DockerDemoLinux.csproj", "DockerDemoLinux/"]
RUN dotnet restore "DockerDemoLinux/DockerDemoLinux.csproj"
COPY . .
WORKDIR "/src/DockerDemoLinux"
RUN dotnet build "DockerDemoLinux.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "DockerDemoLinux.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "DockerDemoLinux.dll"]