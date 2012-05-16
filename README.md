### This is just a proof of concept.

Running on OpenShift
----------------------------

Create an account at http://openshift.redhat.com/

Create a DIY application:

    rhc-app create -a foobar -t diy-0.1

Add this upstream repo

    cd foobar
    git remote add upstream -m master git://github.com/oberhamsi/ringojs-openshift-example.git
    git pull -s recursive -X theirs upstream master

Then push the repo upstream

    git push

That's it, you can now checkout your application at:

    http://foobar-$YOURNAMESPACE.rhcloud.com/

Modifying this skeleton to run your application
-------------------------------------------------

Add a toplevel directory holding your Ringo application. Then modify `RINGO_APP_MAIN` in `.openshift/action_hooks/constants` to point to your application's `main.js`.

Finally, add all packages your app requires as submodules below `ringojs-packages`

For example, to add the stick package you would run:

    git submodule add https://github.com/hns/stick.git packages/stick
    git commit -m 'adding stick package'