# Get started

## Installation

Download Paper here: [https://papermc.io/downloads](https://papermc.io/downloads). Choose the last build of 1.19.3 version.&#x20;

### Create a server start script

#### Linux

Create a **start.sh** file.

```bash
java -Xmx2048M -Xms2048M -jar paper-1.19.3-431.jar
```

#### Windows

Create a **start.bat** file

<pre class="language-bash"><code class="lang-bash"><strong>@echo off
</strong>
java -Xmx2048M -Xms2048M -jar minecraft_server.1.19.3.jar &#x3C;your_paper_file>
pause
</code></pre>

### Launch server and install dependencies

1. Execute the server start script. The Minecraft server should start. Once initialized, stop it. Some files and folders should have been created.
2. Clone the Fort-Lisa project somewhere in your machine.
3. Copy all **jars** of the **/dependencies** folder of Fort-Lisa into the **/plugins** folder of your server.
4. Start the server again. All plugins are going to be initialized and installed.
5. Once done, move the Fort-Lisa project into **plugin/Skript/script**. You  should now have a **plugin/Skript/script/fort-lisa** folder.
6. Launch your Minecraft client. Go to multiplier. Connect to your server at the **localhost** address.
7. Once logged, go to your minecraft console. run `/op <your_account>`. This will give you all priviledges on the server.
8. From your MC client, run a `/sk reload all` command. All scripts should take less than 1 min to load.
9. Then, run the command `/admin init`

### Enable Hot Reload

{% hint style="danger" %}
On Windows, Hot Reload doesn't work well
{% endhint %}

Go to Fort-Lisa project.
